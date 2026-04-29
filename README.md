#  AutoMigrator AI Engine

Motor de migración determinista y asistido por IA para actualizar **ethers.js de v5 a v6**.

[![Demo en vivo](https://img.shields.io/badge/Live%20Demo-blue)](https://angietatianaalbaamado-bot.github.io/automigrator-ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## El Problema
Migrar de `ethers.js` v5 a v6 implica cambios profundos en la API, refactorizaciones manuales extensas y un alto riesgo de errores humanos. Los métodos tradicionales de migración no escalan para repositorios profesionales.

##  La Solución: Enfoque Híbrido
**AutoMigrator AI** automatiza este proceso mediante un flujo de trabajo de dos capas:

### 1. Motor de Transformación AST (Determinista)
Utilizamos `jscodeshift` para analizar el código y aplicar cambios estructurales seguros, garantizando **cero falsos positivos**.

**Funciones clave del motor:**
*   **Refactorización de Proveedores:** Automatiza la migración de `ethers.providers.X` a `ethers.X`.
*   **Limpieza de utilidades:** Convierte `ethers.utils.X` a `ethers.X` de forma masiva.
*   **Migración de Providers de Navegador:** Automatiza `Web3Provider` a `BrowserProvider` para entornos modernos.
*   **Optimización de llamadas a contratos:** Convierte `contract.callStatic.method(...)` a `contract.method.staticCall(...)`.
*   **Conversión de Tipos:** Automatiza `BigNumber.from(x)` a `BigInt(x)` para cumplir con los estándares v6.

### 2. Capa Asistida por IA
Gestiona los casos excepcionales que el AST no puede resolver:
*   Patrones de código no estándar.
*   Casos límite en lógica de negocio.
*   Refactorizaciones de testing y mocks.

---

##  Arquitectura del Pipeline
1. **Análisis:** Análisis AST para identificar patrones `ethers.js` v5.
2. **Transformación:** Aplicación de codemods deterministas.
3. **Resolución:** Capa de IA para casos complejos.
4. **Validación:** Comparación visual antes/después en el dashboard.

---

##  Cómo usar

### Requisitos previos
```bash
npm install
```

### Ejecutar migración por CLI
```bash
node migrate.js input.js
```

### Ejecutar Interfaz Web (Dashboard)
```bash
npm run demo
# Abrir en http://127.0.0.1:8080
```

---

## Resultados Esperados
*   **Automatización:** >80% de los patrones de migración cubiertos.
*   **Fiabilidad:** Cambios deterministas sin efectos secundarios.
*   **Impacto:** Reducción drástica del tiempo de mantenimiento de meses a minutos.

---

##  Hackathon: Boring AI 2026
Proyecto desarrollado para automatizar tareas repetitivas mediante IA, garantizando un flujo de trabajo de nivel profesional.

##  Autor
Angie Tatiana Alba Amado

##  Licencia
MIT