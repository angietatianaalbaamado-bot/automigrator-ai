export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.MemberExpression, {
      object: {
        object: { name: "ethers" },
        property: { name: "providers" }
      },
      property: { name: "JsonRpcProvider" }
    })
    .replaceWith(() =>
      j.memberExpression(
        j.identifier("ethers"),
        j.identifier("JsonRpcProvider")
      )
    );

  return root.toSource();
} 
