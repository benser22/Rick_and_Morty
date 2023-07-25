const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const id = req.params.id;
  try {
    const {data} = await axios.get(`${URL}${id}`)
      const { status, name, species, origin, image, gender, episode } = data;
      res.json({ id, status, name, species, origin, image, gender, episode });
    } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = getCharById;
