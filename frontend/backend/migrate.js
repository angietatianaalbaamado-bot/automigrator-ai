 import { execSync } from "child_process";

const file = process.argv[2];

if (!file) {
  console.log("❌ Debes pasar un archivo");
  console.log("Ejemplo: node migrate.js input.js");
  process.exit(1);
}

try {
  console.log("🚀 Migrando archivo...");

  execSync(`npx jscodeshift -t transform.js ${file}`, {
    stdio: "inherit"
  });

  console.log("✅ Migración completada");
} catch (error) {
  console.error("❌ Error en la migración:", error.message);
}
