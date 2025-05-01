js
CopyEdit
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to RDS MySQL!');
});

app.get('/', (req, res) => {
  res.send('Node.js API is running on EC2');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
