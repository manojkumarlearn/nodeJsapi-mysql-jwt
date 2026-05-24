const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || process.env.jwt_secret || "secretkey";
const AUTH_USERNAME = process.env.AUTH_USERNAME || "admin";
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "admin123";

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password are required",
      statusCode: 400,
      data: [],
    });
  }

  if (username !== AUTH_USERNAME || password !== AUTH_PASSWORD) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
      statusCode: 401,
      data: [],
    });
  }

  const payload = { username };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({
    success: true,
    message: "Login successful",
    statusCode: 200,
    data: { token },
  });
});

module.exports = router;
