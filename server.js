const express = require("express");
const cors = require("cors");
require("dotenv").config();

const profileRoutes = require("./routes/profile");
const projectsRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://your-frontend.vercel.app" // replace later
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Victoria Kasapila Portfolio API");
});

app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
