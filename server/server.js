const express = require("express");
const path = require("path");
// Instead of: "./routes", use "./server/routes" if you kept files in server/
const routes = require("./server/routes");
const db = require("./server/config/connection");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// ✅ Serve static files from React frontend
app.use(express.static(path.resolve(__dirname, "../../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`✅ API server running on port ${PORT}!`);
  });
});
