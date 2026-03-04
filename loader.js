(function () {
  const script = document.currentScript;

  const publicKey = script.getAttribute("data-key");

  if (!publicKey) {
    console.error("LeadyIA: data-key obrigatório.");
    return;
  }

  const widgetScript = document.createElement("script");
  widgetScript.src = "https://widget.leadyia.com/v1/widget.js";
  widgetScript.async = true;
  widgetScript.setAttribute("data-tenant", publicKey);

  document.head.appendChild(widgetScript);
})();