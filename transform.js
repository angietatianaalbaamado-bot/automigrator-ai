export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 1. Cambiar providers
  root
    .find(j.MemberExpression, {
      object: {
        object: { name: "ethers" },
        property: { name: "providers" }
      }
    })
    .replaceWith(path => {
      return j.memberExpression(
        j.identifier("ethers"),
        path.node.property
      );
    });

  // 2. Cambiar utils (ej: ethers.utils → ethers)
  root
    .find(j.MemberExpression, {
      object: { name: "ethers" },
      property: { name: "utils" }
    })
    .replaceWith(() => j.identifier("ethers"));

  return root.toSource();
}