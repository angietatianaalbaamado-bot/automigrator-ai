# 🚀 AutoMigrator AI

Tool to automate migration from ethers.js v5 to v6 using codemods and AI.

## 🧠 Problem
Maintaining and upgrading codebases is slow, repetitive, and error-prone.

## 💡 Solution
AutoMigrator AI automates the migration process from ethers.js v5 to v6 using:
- Codemods for deterministic transformations
- AI for handling edge cases

## ⚙️ Features
- Automatically updates `ethers.providers` to v6 format
- Transforms `ethers.utils` usage
- Reduces manual migration effort

## 📊 Results
- Automates a significant portion of migration steps
- Reduces developer time and errors

## 🧪 How to use

```bash
npx jscodeshift -t transform.js input.js