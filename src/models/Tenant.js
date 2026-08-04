/**
 * ======================================================
 * 📄 Tenant.js — LeadyIA Enterprise Supreme FINAL
 * ======================================================
 * ✅ 100% Compatível com sistema atual
 * ✅ Playbook mantido no root (motor interno)
 * ✅ Niche mantido no root (indexação)
 * ✅ Espelhado dentro de identity
 * ✅ Merge seguro no pre-save
 * ✅ Pronto para multi-core / 100k tenants
 * ======================================================
 */

import mongoose from "mongoose";

/**
 * ======================================================
 * 🧠 NICHE CONFIG (CORE VISUAL BASE)
 * ======================================================
 */

export const NICHE_CONFIG = {
  leadyia: { label: "LeadyIA", icon: "🤖", color: "#6366f1" },
  clinic: { label: "Clínica", icon: "🏥", color: "#0ea5e9" },
  real_estate: { label: "Imobiliária", icon: "🏠", color: "#22c55e" },
  aesthetics: { label: "Estética", icon: "✨", color: "#ec4899" },
  education: { label: "Educação", icon: "🎓", color: "#f59e0b" },
  ecommerce: { label: "E-commerce", icon: "🛒", color: "#ef4444" },
  saas_b2b: { label: "SaaS", icon: "💻", color: "#8b5cf6" },

  /**
   * ⚖️ NOVO — JURÍDICO
   */
  legal: {
    label: "Jurídico",
    icon: "⚖️",
    color: "#1e293b", // cor mais sóbria (enterprise/legal feel)
  },
};

/**
 * ======================================================
 * SCHEMA
 * ======================================================
 */

const TenantSchema = new mongoose.Schema(
  {
    /**
     * ==================================================
     * IDENTIDADE BÁSICA
     * ==================================================
     */

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    apiKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    /**
     * ==================================================
     * CORE ENGINE (MOTOR INTERNO)
     * ==================================================
     */

    playbook: {
      type: String,
      default: "leadyia",
      index: true,
    },

    niche: {
      type: String,
      default: "leadyia",
      index: true,
    },

    /**
     * ==================================================
     * IDENTITY (ENTERPRISE EXPANDIDO)
     * ==================================================
     */

    identity: {
      /**
       * 🔥 ESPELHO DO CORE (IMPORTANTE)
       * Usado por frontend, welcome engine e debug
       */
      playbook: {
        type: String,
        default: "leadyia",
      },

      niche: {
        type: String,
        default: "leadyia",
      },

      /**
       * 🎨 Visual / UI
       */
      label: { type: String },
      icon: { type: String },
      color: { type: String },

      /**
       * 🏢 Marca e canais oficiais
       */
      brandName: {
        type: String,
        trim: true,
        default: null,
      },

      website: {
        type: String,
        trim: true,
        default: null,
      },

      supportEmail: {
        type: String,
        trim: true,
        lowercase: true,
        default: null,
      },

      salesEmail: {
        type: String,
        trim: true,
        lowercase: true,
        default: null,
      },

      whatsapp: {
        type: String,
        trim: true,
        default: null,
      },

      phone: {
        type: String,
        trim: true,
        default: null,
      },

      /**
       * 🚀 FUTURO: comportamento IA por tenant
       * (não quebra nada atual)
       */
      coreProfile: {
        tone: { type: String, default: null },
        persona: { type: String, default: null },
        urgencyLevel: { type: Number, default: null },
        salesAggressiveness: { type: Number, default: null },
      },
    },

    /**
     * ==================================================
     * BILLING
     * ==================================================
     */

    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
      default: null,
      index: true,
    },

    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
      index: true,
    },

    billingStatus: {
      type: String,
      enum: [
        "trial",
        "active",
        "past_due",
        "canceled",
        "suspended",
      ],
      default: "trial",
      index: true,
    },

    trialEndsAt: Date,
    canceledAt: Date,
    suspendedAt: Date,

    /**
     * ==================================================
     * BOT
     * ==================================================
     */

    defaultBot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bot",
      default: null,
    },

    /**
     * ==================================================
     * BUSINESS (LEGADO — MANTIDO)
     * ==================================================
     */

    business: {
      website: {
        type: String,
        trim: true,
        default: null,
      },
      whatsapp: {
        type: String,
        trim: true,
        default: null,
      },
    },

    /**
     * ==================================================
     * BRANDING
     * ==================================================
     */

    branding: {
      logo: {
        type: String,
        default: null,
      },
      primaryColor: {
        type: String,
        default: "#6366f1",
      },
      botName: {
        type: String,
        default: "Assistente Virtual",
      },
    },

    /* ====================================================== */
/* 🌍 Allowed Origins (Enterprise) */
/* ====================================================== */

allowedOrigins: [
  {
    type: String,
    trim: true,
    lowercase: true,
  }
],

    /**
     * ==================================================
     * USAGE
     * ==================================================
     */

    onboarding: {
      channel: {
        type: String,
        enum: ["website", "whatsapp", "both", "guided"],
        default: "guided",
        index: true,
      },
      knowledgeBootstrap: {
        type: String,
        enum: ["website_crawl", "guided_business_profile", "pending_guided_setup"],
        default: "pending_guided_setup",
      },
      whatsappFirst: { type: Boolean, default: false },
      businessDescription: { type: String, trim: true, maxlength: 2000, default: null },
      version: { type: String, default: "v1103.41.2" },
    },

    usage: {
      messagesThisMonth: { type: Number, default: 0 },
      tokensThisMonth: { type: Number, default: 0 },
      botsCount: { type: Number, default: 1 },
      sitesCount: { type: Number, default: 0 },
    },


    /**
     * ==================================================
     * AGENCY / WHITE-LABEL RESELLER FOUNDATION
     * ==================================================
     * FASE 21A — campos opcionais. Não afetam tenants existentes.
     */

    agency: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      default: null,
      index: true,
    },

    agencyManaged: {
      type: Boolean,
      default: false,
      index: true,
    },

    billingOwner: {
      type: String,
      enum: ["tenant", "agency", "platform"],
      default: "tenant",
      index: true,
    },

    agencyMetadata: {
      source: { type: String, default: null },
      linkedAt: { type: Date, default: null },
      linkedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
      notes: { type: String, default: "" },
    },

    /**
     * ==================================================
     * CONTROL
     * ==================================================
     */

    active: {
      type: Boolean,
      default: true,
      index: true,
    },

    blockedReason: {
      type: String,
      default: null,
    },

    lastActivityAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * ======================================================
 * 🔄 AUTO SYNC CORE → IDENTITY (MERGE SEGURO)
 * ======================================================
 */

TenantSchema.pre("save", function (next) {
  const config =
    NICHE_CONFIG[this.playbook] ||
    NICHE_CONFIG.leadyia;

  /**
   * 🔹 Root mantém motor interno
   */
  this.niche = this.playbook;

  /**
   * 🔹 Identity espelha motor
   * 🔒 Merge seguro — não sobrescreve dados custom
   */
  this.identity = {
    ...this.identity,

    playbook: this.playbook,
    niche: this.playbook,

    label: config.label,
    icon: config.icon,
    color: config.color,
  };

  /**
   * 🔹 Branding automático se não existir
   */
  if (!this.branding) {
    this.branding = {};
  }

  if (!this.branding.primaryColor) {
    this.branding.primaryColor = config.color;
  }

  next();
});

TenantSchema.index({ agency: 1, agencyManaged: 1 });
TenantSchema.index({ billingOwner: 1, agency: 1 });

export default mongoose.model("Tenant", TenantSchema);