// const http = require("http");
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

// function getCharById (res, id) {
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//       const character = {
//         id: id,
//         name: response.data.name,
//         gender: response.data.gender,
//         species: response.data.species,
//         origin: response.data.origin,
//         image: response.data.image,
//         status: response.data.status,
//         episode: response.data.episode
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch(error => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// };

module.exports = getCharById;
