const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Pre-call webhook hit:", req.body);

  // Example: fetch user info before call
  const dynamicVariables = {
    patientName: "John Doe",
    lastVisit: "2025-08-10",
  };

  res.json({ dynamicVariables });
});

module.exports = router;
