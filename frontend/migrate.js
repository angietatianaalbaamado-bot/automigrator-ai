import { execSync } from "child_process";

const file = process.argv[2];

if (!file) {
  console.log("❌ Usa: node migrate.js archivo.js");
  process.exit(1);
}

try {
  console.log("🚀 Migrando...");

  execSync(`npx jscodeshift -t transform.js ${file}`, {
    stdio: "inherit"
  });

  console.log("✅ Listo");
} catch (e) {
  console.error("❌ Error:", e.message);
} 
