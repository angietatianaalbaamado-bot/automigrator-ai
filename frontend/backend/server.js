const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/migrate", (req, res) => {
  const code = req.body.code;

  fs.writeFileSync("temp.js", code);

  try {
    let result = code
      .replace(/ethers\.providers/g, "ethers")
      .replace(/JsonRpcProvider/g, "JsonRpcProvider");

    fs.writeFileSync("temp.js", result);

    const final = fs.readFileSync("temp.js", "utf-8");

    res.json({ result: final });
  } catch (err) {
    res.json({ result: "Error en migración" });
  }
});

app.listen(5000, () => {
  console.log("🚀 http://localhost:5000");
});