const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ nome: "teste de backend" });
});

app.listen(3000);
