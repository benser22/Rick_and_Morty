const express = require("express");
const server = express();
const router = require("../routes/index");

// Middleware para permitir CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
server.use(express.json());

// Middleware para agregar el prefijo "/rickandmorty" a las rutas
server.use("/rickandmorty", router);

module.exports = server;
