const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const dataPath = path.join(__dirname, "..", "data", "portfolio.json");

function loadPortfolio() {
  const raw = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(raw);
}

router.get("/", (req, res) => {
  const { projects } = loadPortfolio();
  res.json(projects);
});

module.exports = router;
