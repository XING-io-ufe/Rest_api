const express = require("express");
const dotenv = require("dotenv");

// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({ path: "./config/config.env" });

const app = express();
// route
app.get("/api/v1/categories", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Бүх категориудыг энд өгнө",
  });
});

app.get("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийн мэдээллийг өгнө`,
  });
});

app.post("/api/v1/categories", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Шинээр категори үүсгэх",
  });
});

app.put("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг өөрчилнө`,
  });
});

app.delete("/api/v1/categories/:id", (req, res) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} ID-тэй категорийг устгана`,
  });
});

app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);
