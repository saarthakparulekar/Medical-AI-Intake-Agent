const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Function call webhook hit:", req.body);
  const { medicalId } = req.body;

  // Mock patient lookup
  const patient = {
    id: medicalId,
    name: "Jane Smith",
    age: 42,
    condition: "Hypertension",
  };

  res.json(patient);
});

module.exports = router;
