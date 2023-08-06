const express = require("express");
const router = express.Router();
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const deleteAllFavs = require("../controllers/deleteAllFavs");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.delete("/fav", deleteAllFavs);

module.exports = router;
