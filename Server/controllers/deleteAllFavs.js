const { Favorite } = require("../src/DB_connection");

async function deleteAllFavs(req, res) {
  try {
    // Eliminar todos los registros de la tabla Favorites
    await Favorite.destroy({
      where: {},
    });
    res
      .status(200)
      .send("Todos los registros en Favorites han sido eliminados.");
  } catch (error) {
    res.status(500).send("Error al eliminar los registros en Favorites.");
  }
}

module.exports = deleteAllFavs;
