const express = require("express");
const router = express.Router();
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav, deleteAllFavs } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.delete("/fav", deleteAllFavs); 

module.exports = router;
