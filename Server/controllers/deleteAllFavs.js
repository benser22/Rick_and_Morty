const { Favorite } = require("../src/DB_connection");

async function deleteAllFavs(req, res) {
  try {
    // Eliminar todos los registros de la tabla Favorites
    await Favorite.destroy({
      where: {},
    });

    // Respuesta con un mensaje de éxito
    res
      .status(200)
      .send("Todos los registros en Favorites han sido eliminados.");
  } catch (error) {
    // Si ocurre un error, responder con un mensaje de error y código 500
    res.status(500).send("Error al eliminar los registros en Favorites.");
  }
}

module.exports = deleteAllFavs;
