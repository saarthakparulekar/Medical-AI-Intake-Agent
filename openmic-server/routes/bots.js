const express = require("express");
const router = express.Router();

// In-memory bot store
let bots = [];

// CREATE bot
router.post("/", (req, res) => {
  const { name, domain } = req.body;
  const newBot = {
    id: Date.now().toString(),
    name,
    domain,
    uid: "bot_" + Math.random().toString(36).substring(2, 8),
  };
  bots.push(newBot);
  res.json(newBot);
});

// LIST bots
router.get("/", (req, res) => {
  res.json(bots);
});

// UPDATE bot
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, domain } = req.body;
  const bot = bots.find((b) => b.id === id);
  if (!bot) return res.status(404).json({ message: "Bot not found" });
  bot.name = name || bot.name;
  bot.domain = domain || bot.domain;
  res.json(bot);
});

// DELETE bot
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  bots = bots.filter((b) => b.id !== id);
  res.json({ message: "Bot deleted" });
});

module.exports = router;
