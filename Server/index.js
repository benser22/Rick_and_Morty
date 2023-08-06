const server = require("./src/app");
const { conn } = require("./src/DB_connection");
const PORT = 3001;

// const router = require("./routes/index");

// // Middleware para permitir CORS
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// // Middleware para parsear el cuerpo de las solicitudes como JSON
// server.use(express.json());

// // Middleware para agregar el prefijo "/rickandmorty" a las rutas
// server.use("/rickandmorty", router);

// Iniciar el servidor
// server.listen(PORT, () => {
//   console.log(`Server raised in port ${PORT}`);
// });

// Sincronizar Sequelize con la base de datos
conn
  .sync({ force: false }) // Cambia a 'true' si quieres que las tablas se creen desde cero en cada inicio del servidor
  .then(() => {
    console.log("Database synced");
    // Iniciar el servidor después de sincronizar
    server.listen(PORT, () => {
      console.log(`Server raised in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log(`Server raised in port ${PORT}`);

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, "localhost");

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log(`Server raised in port ${PORT}`);

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       const character = data.find((character) => character.id === Number(id));

//       if (character) {
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Character not found");
//       }
//     }
//   })
//   .listen(PORT, "localhost");

// module.exports = http;
