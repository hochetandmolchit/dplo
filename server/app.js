const mysql = require('mysql');
//const express = require('express');
//const app = express();
//const fs = require('fs');
const Router = require('express');
const { check } = require('express-validator');
const cors = require('cors');
const { validationResult } = require('express-validator');
const router = new Router();
const sql = 'select * from card';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cardstore',
  password: 'root',
});

const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

conn.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Database is ok');
  }
});
app.use(cors());

app.get('/0', (req, res) => {
  conn.query(sql, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.status(200).json(results);
  });
});

for (let CategoryIndex = 1; CategoryIndex <= 5; CategoryIndex++) {
  app.get(`/${CategoryIndex}`, (req, res) => {
    conn.query(`select * from card WHERE Category=${CategoryIndex}`, function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.status(200).json(results);
    });
  });
}

app.post('/rega', (req, res) => {
  console.log(req.body.mail);
  console.log(req.body.pass);
  if (req.body.pass === req.body.pass2) {
    res.status(200).json(req.body);
  } 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
