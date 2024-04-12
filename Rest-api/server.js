// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/gorum")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/games", require("./routes/games")); // This line is for the /api/games route
app.use("/api/posts", require("./routes/posts"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
