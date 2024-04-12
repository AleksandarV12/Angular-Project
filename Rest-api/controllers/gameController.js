// controllers/gameController.js

const Game = require("../models/Game");

module.exports = {
  getAllGames: async (req, res) => {
    try {
      const games = await Game.find();
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getGameById: async (req, res) => {
    try {
      const gameId = req.params.id;
      const game = await Game.findById(gameId);
      if (!game) {
        return res.status(404).json({ message: "Game not found" });
      }
      res.json(game);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createGame: async (req, res) => {
    try {
      const newGame = await Game.create(req.body);
      res.status(201).json(newGame);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGame: async (req, res) => {
    try {
      const gameId = req.params.id;
      const updatedGame = await Game.findByIdAndUpdate(gameId, req.body, {
        new: true,
      });
      if (!updatedGame) {
        return res.status(404).json({ message: "Game not found" });
      }
      res.json(updatedGame);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGame: async (req, res) => {
    try {
      const gameId = req.params.id;
      const deletedGame = await Game.findByIdAndDelete(gameId);
      if (!deletedGame) {
        return res.status(404).json({ message: "Game not found" });
      }
      res.json({ message: "Game deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
