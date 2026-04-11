export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 1. Cambiar ethers.providers → ethers
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

  // 2. Cambiar ethers.utils → ethers
  root
    .find(j.MemberExpression, {
      object: { name: "ethers" },
      property: { name: "utils" }
    })
    .replaceWith(() => j.identifier("ethers"));

  // 3. Cambiar BigNumber → BigInt
  root
    .find(j.Identifier, { name: "BigNumber" })
    .replaceWith(() => j.identifier("BigInt"));

  return root.toSource();
}