const { Favorite } = require("../src/DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ error: "Missing data" });
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
    return res.status(500).json({ message: "Failed to save favorite character", error });
  }
};

module.exports = postFav;
