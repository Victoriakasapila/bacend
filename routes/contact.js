const express = require("express");

const router = express.Router();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ success: false, error: "Name is required." });
  }

  if (!email || typeof email !== "string" || !emailPattern.test(email.trim())) {
    return res.status(400).json({ success: false, error: "Valid email is required." });
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ success: false, error: "Message is required." });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  console.log("[contact]", payload);

  res.json({
    success: true,
    message: "Message received successfully. Thank you for reaching out!",
  });
});

module.exports = router;
