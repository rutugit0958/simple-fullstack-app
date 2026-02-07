const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_mysql_password",
  database: "testdb"
});

// Connect DB
db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Database connected successfully");
  }
});

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Sample API — insert data
app.post("/add-user", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO users (name) VALUES (?)", [name], (err, result) => {
    if (err) return res.send(err);
    res.send("User added");
  });
});

// Sample API — get data
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
