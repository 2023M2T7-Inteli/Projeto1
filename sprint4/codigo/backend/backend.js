import express from 'express';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';

const DBPATH = './data/banco.db';
const hostname = '127.0.0.1';
const port = 3001;

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const db = new sqlite3.Database(DBPATH);

app.use(express.static("./frontend/"));
app.use(bodyParser.json());

// Endpoint to retrieve all users
app.get('/user', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const sql = 'SELECT * FROM Usuario';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
    console.log(rows);
  });
});

// Endpoint to retrieve user logins
app.get('/userLogin', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const sql = 'SELECT login FROM Usuario';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Endpoint to retrieve user passwords
app.get('/userPassword', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const sql = 'SELECT senha FROM Usuario';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Endpoint to retrieve user types
app.get('/userType', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const sql = 'SELECT tipo FROM Usuario';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Endpoint to insert a new user
app.post('/userInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const sql = "INSERT INTO Usuario (login, senha, tipo) VALUES ('" + req.body.email + "', '" + req.body.password + "', '" + req.body.type + "')";
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  
  res.redirect('../index.html');
  res.end();
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
