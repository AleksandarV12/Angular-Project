// routes/games.js

const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// GET all games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
