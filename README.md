# AutoMigrator AI Engine

Motor de migración determinista para actualizar ethers.js de v5 a v6 utilizando transformaciones AST y procesamiento asistido por IA.

---

## Introducción

Crear software es emocionante. Mantenerlo actualizado es lo que realmente lo ralentiza todo.

Cada actualización, refactorización o migración implica riesgos, tiempo y esfuerzo manual.

AutoMigrator AI convierte migraciones complejas en procesos rápidos, confiables y automatizados mediante una combinación de transformaciones de código deterministas y asistencia de inteligencia artificial.

---

## Problema

Migrar de ethers.js v5 a v6 representa un reto real:

- Cambios importantes en la API  
- Refactorización manual en múltiples archivos  
- Alto riesgo de errores humanos  
- Procesos repetitivos y lentos  

Las soluciones tradicionales no escalan para proyectos reales.

---

## Solución

AutoMigrator AI implementa un enfoque híbrido:

### Transformaciones AST deterministas

Usando `jscodeshift`, el sistema analiza el código como estructura (AST) y aplica cambios seguros:

- `ethers.providers.X → ethers.X`  
- `ethers.utils.X → ethers.X`  

Estas transformaciones cubren la mayor parte de la migración sin errores.

---

### Capa asistida por IA (simulada)

Una capa de IA representa el manejo de casos complejos:

- Patrones no estándar  
- Casos límite  
- Correcciones adicionales  

---

### Pipeline de migración

- Clonación del repositorio  
- Transformación AST  
- Procesamiento con IA  
- Generación de Pull Request  

---

## Características

- Motor de transformación basado en AST  
- Cambios deterministas (sin falsos positivos)  
- Interfaz visual tipo dashboard  
- Pipeline interactivo  
- Logs en tiempo real  
- Comparación antes/después  
- Ejecución por CLI  

---

## Demo

### Entrada (ethers.js v5)

```js
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider();
const hash = ethers.utils.keccak256("hola");
Salida (ethers.js v6)
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider();
const hash = ethers.keccak256("hola");
```

## Arquitectura

El sistema está compuesto por tres capas:

## Motor Codemod
- Basado en jscodeshift
- Transformaciones AST seguras

## Capa de ejecución
- Script CLI (migrate.js)

## Capa visual
- Interfaz web (index.html)

## Cómo usar
Instalar dependencias
- npm install

## Ejecutar migración
- node migrate.js input.js

## Ejecutar interfaz web
- live-server

## Abrir en navegador:

 "automigrator-ai" at http://127.0.0.1:8080

## Demo en vivo

https://github.com/angietatianaalbaamado-bot/automigrator-ai

## Estructura del proyecto
```
automigrator-ai/

├── index.html
├── transform.js
├── migrate.js
├── input.js
├── server.js
├── ai-helper.js
├── README.md
├── package.json
```
## Resultados
- Automatiza gran parte de la migración
- Reduce el trabajo manual
- Minimiza errores
- Flujo profesional funcional

## Contexto del Hackathon

## Proyecto desarrollado para:

Boring AI Hackathon 2026

## Objetivo

- Automatizar más del 80%
- Reducir intervención manual
- Crear una solución confiable

## Evaluación

- Transformaciones deterministas
- Caso real de migración
- Demo funcional
- Arquitectura clara

## Futuras mejoras

- Soporte para más casos de ethers v6
- Procesamiento de repos completos
- Integración con GitHub
- IA real
- Análisis avanzado


## Autor

Angie Tatiana Alba Amado

## Licencia

MIT