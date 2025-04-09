const express = require("express");
const path = require("path");
const routes = require("./routes"); // assuming routes are in server/routes
const db = require("./config/connection");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ✅ Serve static files from React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(routes);

// ✅ Serve React app for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`✅ API server running on port ${PORT}!`);
  });
});
