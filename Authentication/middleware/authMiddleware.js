const jwt = require("jsonwebtoken");
const redis = require("redis");
const client = redis.createClient();
require("dotenv").config();

// MIDDLEWARE TO VERIFY IF TOKEN IS BLACKLISTED
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access denied");

  client.get(token, (err, result) => {
    if (result) return res.status(403).send("Token is blacklisted");

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).send("Invalid token");
    }
  });
};

// LOGOUT ROUTE
app.post("/logout", authMiddleware, (req, res) => {
  const token = req.headers.authourization.split(" ")[1];
  const expires = 60 * 60; // 1 hour, matching JWT expiration time

  client.set(token, "blacklisted", "EX", expiresIn, (err) => {
    if (err) return res.status(500).send("Error logging out");
    res.send("Successfully logged out");
  });
});

module.exports = authMiddleware;
