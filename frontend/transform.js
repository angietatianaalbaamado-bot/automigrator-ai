export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let changed = false;

  // 1. providers.X → X
  root.find(j.MemberExpression, {
    object: { object: { name: "ethers" }, property: { name: "providers" } }
  }).replaceWith(path => {
    changed = true;
    return j.memberExpression(j.identifier("ethers"), path.node.property);
  });

  // 2. Web3Provider → BrowserProvider (Directo en ethers)
  root.find(j.MemberExpression, {
    object: { name: "ethers" },
    property: { name: "Web3Provider" }
  }).replaceWith(path => {
    changed = true;
    return j.memberExpression(j.identifier("ethers"), j.identifier("BrowserProvider"));
  });

  // 3. contract.callStatic.method(...) → contract.method.staticCall(...)
  root.find(j.MemberExpression, {
    property: { name: "callStatic" }
  }).replaceWith(path => {
    changed = true;
    const contract = path.node.object;
    const method = path.parentPath.node.property;
    return j.memberExpression(
      j.memberExpression(contract, method),
      j.identifier("staticCall")
    );
  });

  return changed ? root.toSource() : null;
}