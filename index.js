require("dotenv").config();
const express = require("express");
const pool = require("./config/db");

const app = express();

// middleware
app.use(express.json());

// 👇 user routes
app.use("/api/users", require("./routes/userRoutes"));

// 👇 task routes (NEW ADD)
app.use("/api/tasks", require("./routes/taskRoutes"));

// test route
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(result.rows);
});

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});