const http = require("http");
// const data = require("./utils/data.js");
const getCharById = require("../Server/controllers/getCharById");

const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(`Server raised in port ${PORT}`);

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log(`Server raised in port ${PORT}`);

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       const character = data.find((character) => character.id === Number(id));

//       if (character) {
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(character));
//       } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Character not found");
//       }
//     }
//   })
//   .listen(PORT, "localhost");

module.exports = http;
