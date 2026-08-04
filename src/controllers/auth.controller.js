/**
 * ======================================================
 * 📄 Arquivo: auth.controller.js
 * 📍 Caminho: src/controllers/auth.controller.js
 * 🚀 LeadyIA Enterprise Version — Production Ready
 * ======================================================
 */

import { signAccessToken } from "../services/security/token.service.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "../models/User.js";
import Tenant from "../models/Tenant.js";
import Bot from "../models/Bot.js";
import Widget from "../models/Widget.js";
import Plan from "../models/Plan.js";

import { bootstrapTenantEnterprise } from "../services/tenant.bootstrap.js";
import { resolveChannelFirstRegistration } from "../services/onboarding/channelFirstRegister.v1103_41_2.service.js";
import websiteCrawlerService from "../services/rag-ingestion/websiteCrawler.service.js";
import documentUploadService from "../services/rag-ingestion/documentUpload.service.js";
import generateApiKey from "../utils/generateApiKey.js";
import logger from "../utils/logger.js";
import { sendTenantEmail } from "../services/email/emailDelivery.service.js";
import { runUniversalRagIndexing } from "../services/rag/universalRagIndexing.service.js";

/**
 * ======================================================
 * 📊 AUTH METRICS
 * ======================================================
 */

const metrics = {

  registerAttempts: 0,
  registerSuccess: 0,
  registerFail: 0,

  loginAttempts: 0,
  loginSuccess: 0,
  loginFail: 0,

  registerDurationMs: [],
  loginDurationMs: []

};

/**
 * ======================================================
 * 🔐 REGISTER — ENTERPRISE ONBOARDING
 * ======================================================
 */

export async function register(req, res) {

  const startTime = Date.now();

  metrics.registerAttempts++;

  logger.info(
    {
      ip: req.ip,
      userAgent: req.headers["user-agent"],
      bodyKeys: Object.keys(req.body || {})
    },
    "[AUTH][REGISTER] Tentativa de registro"
  );

  const session = await mongoose.startSession();

  try {

    const {
      name,
      email,
      password,
      companyName,
      website,
      whatsapp,
      phone, // ✅ NOVO CAMPO
      branding = {},
      playbook: requestedPlaybook,
      onboardingChannel,
      businessDescription,
    } = req.body;

    /**
     * ======================================================
     * 1️⃣ Basic Validation
     * ======================================================
     */

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Campos obrigatórios ausentes",
      });
    }

    /**
     * ======================================================
     * 2️⃣ Playbook whitelist security
     * ======================================================
     */

    const ALLOWED_PLAYBOOKS = [
  "leadyia",
  "clinic",
  "real_estate",
  "aesthetics",
  "education",
  "ecommerce",
  "saas_b2b",

  /**
   * ⚖️ NOVO — JURÍDICO
   */
  "legal",
];

    const playbook = ALLOWED_PLAYBOOKS.includes(requestedPlaybook)
      ? requestedPlaybook
      : "leadyia";

    /**
     * ======================================================
     * 3️⃣ Normalize
     * ======================================================
     */

    const emailNormalized = email
      .trim()
      .toLowerCase()
      .normalize("NFC");

    const passwordNormalized =
      password.normalize("NFC");

    /**
     * ======================================================
     * 4️⃣ Check existing user
     * ======================================================
     */

    const existingUser =
      await User.findOne({
        email: emailNormalized,
      });

    if (existingUser) {

  logger.warn(
    { email: emailNormalized },
    "[AUTH][REGISTER] Usuário já existe"
  );

  metrics.registerFail++;

  return res.status(409).json({
    error: "Usuário já existe",
  });

}

    /**
     * ======================================================
     * 5️⃣ Find or Create FREE PLAN
     * ======================================================
     */

    let freePlan =
      await Plan.findOne({
        slug: "free",
        isActive: true,
      });

    if (!freePlan) {

      logger.warn(
        "[AUTH][REGISTER] Plano FREE não encontrado — criando automaticamente"
      );

      freePlan =
        await Plan.create({

          name: "Free",
          slug: "free",
          isActive: true,
          price: 0,
          currency: "BRL",

          features: {
            botsLimit: 1,
            messagesLimit: 1000,
            ragEnabled: true,
          },

        });

    }

    /**
     * ======================================================
     * 6️⃣ Generate unique tenant slug
     * ======================================================
     */
let channelFirst;
try {
  channelFirst = resolveChannelFirstRegistration({
    onboardingChannel, website, whatsapp, businessDescription,
  });
} catch (error) {
  const messages = {
    INVALID_WEBSITE: "Website inválido.",
    WEBSITE_REQUIRED_FOR_SELECTED_CHANNEL: "Informe o website para começar pelo site.",
    WHATSAPP_REQUIRED_FOR_SELECTED_CHANNEL: "Informe um WhatsApp válido para começar pelo WhatsApp.",
    WEBSITE_AND_WHATSAPP_REQUIRED_FOR_SELECTED_CHANNEL: "Informe website e WhatsApp para começar pelos dois canais.",
  };
  return res.status(400).json({ error: messages[error.message] || "Dados de onboarding inválidos" });
}
const normalizedWebsite = channelFirst.website;
const hostname = channelFirst.hostname;
const normalizedWhatsapp = channelFirst.whatsapp;
    const tenantName = companyName || name;

    const baseSlug =
      tenantName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    let uniqueSlug;

    while (true) {

      const candidate =
        `${baseSlug}-${Math.random()
          .toString(36)
          .slice(2, 8)}`;

      const exists =
        await Tenant.findOne({
          slug: candidate,
        });

      if (!exists) {
        uniqueSlug = candidate;
        break;
      }

    }

    /**
     * ======================================================
     * START TRANSACTION
     * ======================================================
     */

    session.startTransaction();

    /**
     * ======================================================
     * 7️⃣ Create Tenant
     * ======================================================
     */

    const [tenant] = await Tenant.create(
      [
        {

          name: tenantName,
slug: uniqueSlug,
apiKey: generateApiKey(),

/**
 * ======================================================
 * 🌐 DOMÍNIOS PERMITIDOS DO WIDGET
 * ======================================================
 * 
 * Isso evita problemas de bootstrap quando o widget
 * valida o host do site que está carregando ele.
 * 
 * Sem isso o middleware tenta inferir o domínio
 * dinamicamente, o que pode gerar latência extra
 * e retries no bootstrap.
 */

allowedOrigins: hostname
  ? [hostname]
  : [],

          /**
           * BILLING
           */

          plan: freePlan._id,
          subscription: null,
          billingStatus: "trial",
          trialEndsAt: new Date(
            Date.now() + Number(process.env.LEADYIA_TRIAL_DAYS || 7) * 24 * 60 * 60 * 1000
          ),

          /**
           * PLAYBOOK
           */

          playbook,
          niche: playbook,

           /**
 * IDENTITY (ENTERPRISE EXPANDIDO)
 */
identity: {
  brandName: tenantName,
  label: tenantName,
  icon: "🏢",
  color: branding.primaryColor || "#6366f1",

  website: normalizedWebsite || null,
  whatsapp: normalizedWhatsapp || null,
  phone: phone || null,
  supportEmail: emailNormalized,
},

          /**
           * BUSINESS (LEGADO)
           */

          business: {
            website: normalizedWebsite || null,
            whatsapp: normalizedWhatsapp || null,
          },

          /**
           * BRANDING
           */

          branding: {
            logo: branding.logo || null,
            botName: branding.botName || "Assistente Virtual",
            primaryColor:
              branding.primaryColor || "#6366f1",
          },

          /**
           * USAGE
           */

          onboarding: {
            channel: channelFirst.onboardingChannel,
            knowledgeBootstrap: channelFirst.knowledgeBootstrap,
            whatsappFirst: channelFirst.whatsappFirst,
            businessDescription: channelFirst.businessDescription,
            version: "v1103.41.2",
          },

          usage: {
            botsCount: 1,
            sitesCount: 0,
            messagesThisMonth: 0,
            tokensThisMonth: 0,
          },

          /**
           * CONTROL
           */

          active: true,
          blockedReason: null,
          lastActivityAt: new Date(),

        },
      ],
      { session }
    );

   logger.info(
  {
    tenantId: tenant._id,
    slug: tenant.slug,
    playbook: tenant.playbook,
    niche: tenant.niche,
    plan: freePlan.slug
  },
  "[AUTH][REGISTER] Tenant criado"
);

    /**
 * ======================================================
 * 8️⃣ Create User
 * ======================================================
 */

logger.info(
  {
    tenantId: tenant._id,
    email: emailNormalized
  },
  "[AUTH][REGISTER] Criando usuário admin"
);

const hashStart = Date.now();

const hashedPassword =
  await bcrypt.hash(passwordNormalized, 10);

logger.debug(
  {
    durationMs: Date.now() - hashStart
  },
  "[AUTH][REGISTER] Password hash gerado"
);

const userStart = Date.now();

const [user] =
  await User.create(
    [
      {
        tenant: tenant._id,
        name,
        email: emailNormalized,
        password: hashedPassword,
        role: "admin",
        active: true,
        status: "active",
        locale: "pt-BR",
        timezone: "America/Sao_Paulo",
      },
    ],
    { session }
  );

logger.info(
  {
    userId: user._id,
    tenantId: tenant._id,
    durationMs: Date.now() - userStart
  },
  "[AUTH][REGISTER] Usuário criado"
);

  /**
 * ======================================================
 * 9️⃣ CREATE DEFAULT BOT (ENTERPRISE HARDENED)
 * ======================================================
 * 
 * 🔥 Este fluxo garante:
 * - Apenas 1 bot default por tenant
 * - Consistência entre Bot e Tenant
 * - Segurança contra concorrência
 */

logger.info(
  {
    tenantId: tenant._id,
  },
  "[AUTH][REGISTER] Criando bot padrão"
);

/**
 * ======================================================
 * 1️⃣ CREATE BOT
 * ======================================================
 */

const [bot] = await Bot.create(
  [
    {
      tenant: tenant._id,

      name: tenant.branding.botName,

      description: "Bot padrão do tenant",

      personality:
        "Atendente virtual inteligente e cordial",

      role: "reception",

      autoStart: true,

      ragEnabled:
        freePlan.features?.ragEnabled ?? true,

      active: true,

      /**
       * ⚠️ CRÍTICO:
       * NÃO nasce como default para evitar race condition
       */
      isDefault: false,

      activePlaybook: null,
    },
  ],
  { session }
);

logger.info(
  {
    tenantId: tenant._id,
    botId: bot._id,
  },
  "[AUTH][REGISTER] Bot criado"
);

/**
 * ======================================================
 * 2️⃣ LIMPAR DEFAULTS ANTIGOS
 * ======================================================
 */

await Bot.updateMany(
  {
    tenant: tenant._id,
    isDefault: true,
  },
  {
    $set: { isDefault: false },
  },
  { session }
);

logger.info(
  {
    tenantId: tenant._id,
  },
  "[AUTH][REGISTER] Defaults antigos removidos"
);

/**
 * ======================================================
 * 3️⃣ DEFINIR NOVO DEFAULT
 * ======================================================
 */

await Bot.updateOne(
  { _id: bot._id },
  {
    $set: { isDefault: true },
  },
  { session }
);

/**
 * ======================================================
 * 4️⃣ LINKAR COM TENANT (SOURCE OF TRUTH)
 * ======================================================
 */

await Tenant.updateOne(
  { _id: tenant._id },
  {
    $set: {
      defaultBot: bot._id,
    },
  },
  { session }
);

logger.info(
  {
    tenantId: tenant._id,
    botId: bot._id,
  },
  "[AUTH][REGISTER] Default bot definido e vinculado ao tenant"
);

  /**
 * ======================================================
 * 🔌 CREATE DEFAULT WIDGET
 * ======================================================
 *
 * Criamos o widget já no onboarding do tenant.
 * Isso evita criação lazy no primeiro acesso.
 * ======================================================
 */

logger.info(
  {
    tenantId: tenant._id,
  },
  "[AUTH][REGISTER] Criando widget padrão"
);

const [widget] = await Widget.create(
  [
    {
      tenantId: tenant._id,
      tenant: tenant._id, // compatibilidade legado

      name: "Default Widget",

      status: "active",

      theme: "dark",

      position: "right",

      allowedDomains: hostname
        ? [hostname]
        : [],

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  { session }
);

logger.info(
  {
    tenantId: tenant._id,
    widgetId: widget._id,
  },
  "[AUTH][REGISTER] Widget criado"
);

/**
 * ======================================================
 * ✅ COMMIT TRANSACTION
 * ======================================================
 */

await session.commitTransaction();
session.endSession();

/**
 * ======================================================
 * 🚀 POST-REGISTER TASKS (ASYNC - NÃO BLOQUEIA RESPOSTA)
 * ======================================================
 * Render/Vercel podem encerrar a request com timeout se email,
 * bootstrap ou RAG demorarem. O tenant/usuário já foram criados
 * dentro da transação; daqui em diante nada deve bloquear o 201.
 */
schedulePostRegisterTasks({
  tenant,
  user,
  bot,
  website,
  normalizedWebsite,
  whatsapp: normalizedWhatsapp,
  phone,
  onboardingChannel: channelFirst.onboardingChannel,
  businessDescription: channelFirst.businessDescription,
});

    /**
     * ======================================================
     * 🔐 Generate JWT
     * ======================================================
     */

    const token = signAccessToken({
      userId: user._id,
      tenantId: tenant._id,
      role: user.role,
    });

    return res.status(201).json({
      token,
      apiKey: tenant.apiKey,
      user,
      tenant,
    });

  } catch (error) {

    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    session.endSession();

    logger.error(
      "[AUTH][REGISTER] Falha",
      error
    );

    return res.status(500).json({
      error: "Erro interno ao registrar",
    });

  }

}


function schedulePostRegisterTasks({ tenant, user, bot, website, normalizedWebsite, whatsapp, phone, onboardingChannel, businessDescription }) {
  setImmediate(async () => {
    try {
      logger.info({ tenantId: tenant._id, email: user.email }, "[AUTH][REGISTER] Post-register async iniciado");

      try {
        const playbook = tenant.playbook || tenant.identity?.playbook || "leadyia";
        const widgetScript = `<script
  src="https://widget.leadyia.com/v1/widget.js"
  data-tenant="${tenant._id}"
  data-theme="dark"
  data-playbook="${playbook}">
</script>`;

        const mailResult = await sendTenantEmail({
          tenantId: tenant._id,
          userId: user._id,
          to: user.email,
          type: "welcome",
          templateKey: "welcome",
          metadata: {
            tenantName: tenant.name,
            brandName: tenant.identity?.brandName || tenant.name || "LeadyIA",
            ownerName: user.name,
            ownerEmail: user.email,
            primaryColor: tenant.branding?.primaryColor || tenant.identity?.color || "#6366f1",
            dashboardUrl: process.env.DASHBOARD_URL || "https://dashboard.leadyia.com",
            dashboardInstallUrl: `${process.env.DASHBOARD_URL || "https://dashboard.leadyia.com"}/dashboard/playbooks`,
            knowledgeUrl: `${process.env.DASHBOARD_URL || "https://dashboard.leadyia.com"}/knowledge`,
            billingUrl: `${process.env.DASHBOARD_URL || "https://dashboard.leadyia.com"}/billing/upgrade`,
            siteUrl: process.env.LEADYIA_SITE_URL || process.env.APP_URL || "https://leadyia.com",
            createAccountUrl: `${process.env.LEADYIA_SITE_URL || process.env.APP_URL || "https://leadyia.com"}/register`,
            wordpressPluginUrl: process.env.LEADYIA_WORDPRESS_PLUGIN_URL || "https://leadyia.com/wordpress",
            wordpressPluginApproved: String(process.env.LEADYIA_WORDPRESS_PLUGIN_APPROVED || "false").toLowerCase() === "true",
            widgetScript,
            tenantId: tenant._id.toString(),
            website: normalizedWebsite || website || tenant.business?.website || tenant.identity?.website,
            playbook,
            trialDays: Number(process.env.LEADYIA_TRIAL_DAYS || 7),
            trialMessages: Number(process.env.LEADYIA_TRIAL_MESSAGES || 200),
            source: "auth-register-post-task-v556",
          },
        });

        logger.info(
          {
            tenantId: tenant._id,
            email: user.email,
            sent: mailResult?.sent === true,
            status: mailResult?.sent ? "sent" : mailResult?.reason || mailResult?.error || "not_sent",
            eventId: mailResult?.eventId,
          },
          "[AUTH][REGISTER] Welcome email processado"
        );
      } catch (mailError) {
        logger.error({ tenantId: tenant._id, error: mailError.message }, "[AUTH][REGISTER] erro no welcome email");
      }

      try {
        await Tenant.updateOne({ _id: tenant._id }, { $set: { onboardingStartedAt: new Date() } });
        logger.info({ tenantId: tenant._id }, "[AUTH][REGISTER] Onboarding iniciado");
      } catch (onboardingError) {
        logger.error({ tenantId: tenant._id, error: onboardingError.message }, "[AUTH][REGISTER] erro ao marcar onboarding");
      }

      try {
        logger.info({ tenantId: tenant._id }, "[AUTH][REGISTER] Bootstrap async iniciado");
        await bootstrapTenantEnterprise({ tenant, bot, website: normalizedWebsite, whatsapp, phone, onboardingChannel, businessDescription });
        logger.info({ tenantId: tenant._id }, "[AUTH][REGISTER] Bootstrap async finalizado");

        if (website) {
          logger.info({ tenantId: tenant._id, botId: bot._id, website }, "[AUTH][REGISTER] AUTO RAG START");
          await autoIngestWebsiteRAG({ tenant, bot, website: normalizedWebsite });
          logger.info({ tenantId: tenant._id, botId: bot._id }, "[AUTH][REGISTER] AUTO RAG DONE");
        }
      } catch (bootstrapError) {
        logger.error("[AUTH][REGISTER] erro bootstrap async", {
          tenantId: tenant._id,
          message: bootstrapError.message,
        });
      }
    } catch (error) {
      logger.error({ tenantId: tenant?._id, message: error.message }, "[AUTH][REGISTER] erro post-register async");
    }
  });
}

async function autoIngestWebsiteRAG({ tenant, bot, website }) {
  const traceId = `auto_rag_v813_${Date.now()}`;
  try {
    if (!website || !tenant?._id || !bot?._id) {
      logger.warn("[AUTO-RAG-V813] parâmetros ausentes", { traceId, hasWebsite: Boolean(website), tenantId: tenant?._id, botId: bot?._id });
      return null;
    }
    const result = await runUniversalRagIndexing({
      tenantId: tenant._id,
      botId: bot._id,
      website,
      triggeredBy: "register",
      force: false,
    });
    logger.info("[AUTO-RAG-V813] concluído", { traceId, ...result });
    return result;
  } catch (error) {
    logger.error("[AUTO-RAG-V813] falhou", { traceId, tenantId: tenant?._id, botId: bot?._id, message: error.message });
    return null;
  }
}

/**
 * ======================================================
 * 🔐 LOGIN
 * ======================================================
 */

export async function login(req, res) {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Credenciais obrigatórias",
      });
    }

    const emailNormalized = String(email).trim().toLowerCase();

    const user = await User
      .findOne({ email: emailNormalized })
      .select("+password");

    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const tenant = await Tenant.findById(user.tenant).populate("plan").lean();

    if (!tenant) {
      return res.status(403).json({ error: "Tenant inválido" });
    }

    const isPlatformTenant = Boolean(
      tenant.isPlatformTenant === true ||
        tenant.platformScope === "platform" ||
        tenant.slug === "leadyia-platform"
    );

    const isPlatformAdmin = Boolean(
      user.isPlatformAdmin === true ||
        user.accessScope === "platform" ||
        user.platformRole === "superadmin" ||
        (isPlatformTenant && ["owner", "admin"].includes(user.role))
    );

    const token = signAccessToken({
      userId: user._id,
      tenantId: tenant._id,
      role: user.role,
      isPlatformAdmin,
      platformRole: user.platformRole || (isPlatformAdmin ? "superadmin" : null),
      accessScope: user.accessScope || (isPlatformAdmin ? "platform" : "tenant"),
    });

    const safeUser = {
      _id: user._id,
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      permissions: Array.isArray(user.permissions) ? user.permissions : [],
      isPlatformAdmin,
      isSuperAdmin: isPlatformAdmin && (user.platformRole === "superadmin" || user.accessScope === "platform"),
      platformRole: user.platformRole || (isPlatformAdmin ? "superadmin" : null),
      accessScope: user.accessScope || (isPlatformAdmin ? "platform" : "tenant"),
      agency: user.agency || null,
      agencyId: user.agency || null,
      agencyRole: user.agencyRole || null,
      locale: user.locale,
      timezone: user.timezone,
      status: user.status,
      active: user.active,
    };

    const safeTenant = {
      _id: tenant._id,
      id: tenant._id,
      name: tenant.name,
      slug: tenant.slug,
      active: tenant.active,
      playbook: tenant.playbook,
      niche: tenant.niche,
      identity: tenant.identity || {},
      branding: tenant.branding || {},
      business: tenant.business || {},
      plan: tenant.plan || null,
      planCode: tenant.planCode || tenant.plan?.code || tenant.plan?.slug || null,
      tier: tenant.tier || tenant.planCode || tenant.plan?.tier || tenant.plan?.slug || null,
      billingStatus: tenant.billingStatus || tenant.billing?.status || null,
      isPlatformTenant,
      platformScope: tenant.platformScope || (isPlatformTenant ? "platform" : null),
      type: tenant.type || null,
    };

    return res.json({ token, user: safeUser, tenant: safeTenant });

  } catch (error) {

    logger.error(error);

    res.status(500).json({
      error: "Erro login",
    });

  }

}

/**
 * ======================================================
 * 👤 ME — ENTERPRISE SANITIZED RESPONSE
 * ======================================================
 */

export async function me(req, res) {

  try {

    const user = req.user;
    const tenant = req.tenant;

    if (!tenant) {
      return res.status(404).json({
        error: "Tenant não encontrado",
      });
    }

    /**
     * ======================================================
     * Populate Plan (leve)
     * ======================================================
     */

    const populatedTenant = await tenant.populate("plan");

    const plan = populatedTenant.plan;

    /**
     * ======================================================
     * Flags inteligentes
     * ======================================================
     */

    const now = new Date();

    const isTrial =
      populatedTenant.billingStatus === "trial" &&
      populatedTenant.trialEndsAt &&
      populatedTenant.trialEndsAt > now;

    const isActive =
      populatedTenant.billingStatus === "active";

    const isSuspended =
      populatedTenant.billingStatus === "suspended";

    const canUseRag =
      plan?.features?.ragEnabled ?? false;

    const canCreateBots =
      (populatedTenant.usage?.botsCount || 0) <
      (plan?.features?.botsLimit || 0);

    /**
     * ======================================================
     * Sanitized Response
     * ======================================================
     */

    return res.json({

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        locale: user.locale,
        timezone: user.timezone,
      },

      tenant: {

        id: populatedTenant._id,
        name: populatedTenant.name,
        slug: populatedTenant.slug,

        playbook: populatedTenant.playbook,
        niche: populatedTenant.niche,

        identity: {
          label: populatedTenant.identity?.label,
          icon: populatedTenant.identity?.icon,
          color: populatedTenant.identity?.color,
          brandName: populatedTenant.identity?.brandName,
          website: populatedTenant.identity?.website,
          whatsapp: populatedTenant.identity?.whatsapp,
          phone: populatedTenant.identity?.phone,
          supportEmail:
            populatedTenant.identity?.supportEmail,
        },

        branding: populatedTenant.branding,

        plan: {
          id: plan?._id,
          name: plan?.name,
          slug: plan?.slug,
          price: plan?.price,
          currency: plan?.currency,
          limits: plan?.features,
        },

        billingStatus: populatedTenant.billingStatus,

        trialEndsAt: populatedTenant.trialEndsAt,

        usage: {
          messagesThisMonth:
            populatedTenant.usage?.messagesThisMonth,
          botsCount:
            populatedTenant.usage?.botsCount,
          sitesCount:
            populatedTenant.usage?.sitesCount,
        },

        flags: {
          isTrial,
          isActive,
          isSuspended,
          canUseRag,
          canCreateBots,
        },

      },

    });

  } catch (error) {

    return res.status(500).json({
      error: "Erro ao carregar sessão",
    });

  }

}