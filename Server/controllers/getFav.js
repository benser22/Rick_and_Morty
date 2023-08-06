const { Favorite } = require("../src/DB_connection");

const getFav = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).send("Error al obtener los favoritos.");
  }
};

module.exports = getFav;
