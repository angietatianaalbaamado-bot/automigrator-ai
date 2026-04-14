export function migrateCode(code) {
  if (!code) return "⚠️ No enviaste código";

  let cleaned = code;

  // 1. Normalizar palabras en español → inglés técnico
  cleaned = cleaned
    .replace(/\bnuevo\b/g, "new")
    .replace(/\bproveedor\b/g, "provider")
    .replace(/\bSaldo\b/g, "balance")
    .replace(/\bContraseña\b/g, "password");

  // 2. Migración ethers v5 → v6
  cleaned = cleaned
    // provider
    .replace(
      /ethers\.providers\.JsonRpcProvider/g,
      "ethers.JsonRpcProvider"
    )
    // formatEther (CASO CLAVE)
    .replace(
      /ethers\.utils\.formatEther/g,
      "ethers.formatEther"
    )
    // BigNumber (extra útil en migraciones reales)
    .replace(
      /ethers\.BigNumber/g,
      "ethers.toBigInt"
    );

  return cleaned;
}