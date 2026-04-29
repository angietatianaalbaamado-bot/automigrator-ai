const rules = require("./rules");

module.exports = function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Aquí el engine jssg normalmente aplica reglas automáticamente,
  // pero dejamos hook para compatibilidad

  return root.toSource();
};