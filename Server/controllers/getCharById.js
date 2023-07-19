const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const id = req.params.id;
  try {
    await axios.get(`${URL}${id}`).then((response) => {
      const character = response.data;
      const { id, status, name, species, origin, image, gender, episode } =
        character;
      res.json({ id, status, name, species, origin, image, gender, episode });
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = getCharById;
