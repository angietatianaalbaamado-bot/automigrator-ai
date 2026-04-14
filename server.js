import express from "express";
import fs from "fs";
import { execSync } from "child_process";

const app = express();
app.use(express.json());
app.use(express.static("."));

app.post("/migrate", (req, res) => {
  const code = req.body.code;

  fs.writeFileSync("temp.js", code);

  try {
    execSync(`npx jscodeshift -t transform.js temp.js`);
    const result = fs.readFileSync("temp.js", "utf-8");
    res.json({ result });
  } catch (error) {
    res.json({ result: "Error en migración" });
  }
});

app.listen(3000, () => {
  console.log("🚀 App corriendo en http://localhost:3000");
});