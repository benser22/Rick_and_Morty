const server = require("./src/app");
const { conn } = require("./src/DB_connection");
const PORT = 3001;

// Sincronizar Sequelize con la base de datos
conn
  .sync({ force: false }) // Si cambio a 'true': las tablas se crean desde cero en cada inicio del servidor
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
