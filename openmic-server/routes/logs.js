const express = require("express");
const router = express.Router();

let logs = [];

// GET call logs
router.get("/", (req, res) => {
  res.json(logs);
});

// Add log helper
function addLog(entry) {
  logs.push({
    id: Date.now().toString(),
    timestamp: new Date(),
    ...entry,
  });
}

module.exports = router;
module.exports.addLog = addLog;
