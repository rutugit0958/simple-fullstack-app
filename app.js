const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
});

db.connect(err => {
  if(err) throw err;
  console.log("DB Connected");
});

app.get('/', (req,res)=>{
  db.query("SELECT * FROM users", (err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

app.listen(3000, ()=>{
  console.log("Server running on port 3000");
});

