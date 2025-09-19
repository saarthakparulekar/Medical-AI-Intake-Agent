const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example test route
app.get("/", (req, res) => {
  res.send("OpenMic Backend Running 🚀");
});

// Import routes
app.use("/api/bots", require("./routes/bots"));
app.use("/api/logs", require("./routes/logs"));
app.use("/api/precall", require("./routes/precall"));
app.use("/api/function", require("./routes/function"));
app.use("/api/postcall", require("./routes/postcall"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
