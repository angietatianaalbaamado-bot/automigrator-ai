const rules = require("./rules");

module.exports = function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Aplicar reglas de migración ethers v5 → v6
  try {
    // Ejemplo: migrar ethers.providers a ethers
    root.find(j.Identifier, { name: "Web3Provider" })
      .replaceWith(j.Identifier.from({ name: "BrowserProvider" }));

    // Aplicar reglas específicas desde rules.js
    if (rules && rules.transform) {
      rules.transform(root, j);
    }
  } catch (error) {
    console.error("Transform error:", error.message);
    return root.toSource();
  }

  return root.toSource();
};