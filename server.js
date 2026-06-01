const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("MongoDB Skipped");

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.get("/api/profile", (req, res) => {
    res.json({
        name: "Victoria Deogratius Kasapila",
        bio: "Data Scientist",
        skills: ["React", "Node.js", "Python", "SQL", "R"],
        qualifications: ["Bc Data  Science "],
        hobbies: ["reading books", "content creation", "singing choir", "swimming "]
    });
});

app.get("/api/projects", (req, res) => {
    res.json([
        {
            title: "EDA Web App",
            description: "Automated data cleaning platform"
        },
        {
            title: "Portfolio System",
            description: "Dynamic profile and analytics system"
        }
    ]);
});

app.post("/api/contact", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Message received successfully"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});