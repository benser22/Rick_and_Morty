const { Favorite } = require("../src/DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Faltan datos" });
  }

  try {
    await Favorite.create({
      id,
      name,
      origin: origin.name,
      status,
      image,
      species,
      gender,
    });

    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ message: "Error al guardar el personaje favorito", error });
  }
};

module.exports = postFav;
