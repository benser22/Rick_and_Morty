const { Favorite } = require("../src/DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.destroy({ where: { id } });

    const favorites = await Favorite.findAll();

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el personaje favorito", error });
  }
};

module.exports = deleteFav;
