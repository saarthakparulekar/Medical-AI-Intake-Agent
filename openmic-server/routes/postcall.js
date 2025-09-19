const express = require("express");
const router = express.Router();
const { addLog } = require("./logs");

router.post("/", (req, res) => {
  console.log("Post-call webhook hit:", req.body);

  // Save call details to logs
  addLog({
    type: "postcall",
    details: req.body,
  });

  res.json({ status: "ok" });
});

module.exports = router;
