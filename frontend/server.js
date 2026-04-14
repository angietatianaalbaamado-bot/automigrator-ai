import { parse } from "recast";
import { visit } from "recast";
import * as b from "recast/lib/builders.js";

export function migrateCode(source) {
  const ast = parse(source);

  visit(ast, {
    visitMemberExpression(path) {
      const node = path.node;

      // Detectar ethers.providers.JsonRpcProvider
      if (
        node.object &&
        node.object.object &&
        node.object.object.name === "ethers" &&
        node.object.property.name === "providers" &&
        node.property.name === "JsonRpcProvider"
      ) {
        path.replace(
          b.memberExpression(
            b.identifier("ethers"),
            b.identifier("JsonRpcProvider")
          )
        );
      }

      this.traverse(path);
    }
  });

  return ast.program.body.length
    ? source.replace(
        "ethers.providers.JsonRpcProvider",
        "ethers.JsonRpcProvider"
      )
    : source;
}