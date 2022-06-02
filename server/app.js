const mysql = require('mysql');
//const express = require('express');
//const app = express();
//const fs = require('fs');

const cors = require('cors');

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

for (let CategoryIndex = 1; CategoryIndex <= 5; CategoryIndex++) {
  app.get(`/${CategoryIndex}`, (req, res) => {
    conn.query(`select * from card WHERE Category=${CategoryIndex}`, function (err, results) {
      if (err) console.log(err);
      console.log(results);
      res.status(200).json(results);
    });
  });
}

app.get('/0', (req, res) => {
  conn.query(sql, function (err, results) {
    if (err) console.log(err);
    console.log(results);
    res.status(200).json(results);
  });
});

app.post('/login', (req, res) => {
  const quer =
    'SELECT username, userpass FROM `cardstore`.`user` WHERE username = ' + `"${req.body.mail}"`;
  conn.query(quer, function (err, results, fields) {
    if (results[0] == undefined) {
      console.log('message');
    } else {
      let login = results[0].username;
      let passsword = results[0].userpass;

      if (login != '' && passsword == req.body.pass) {
        console.log(req.body.mail);
        res.status(200).json(req.body);
      } else {
        console.log('gji`k yf[eq');
      }
    }
  });
});

app.post('/shop', (req, res) => {
  // console.log(req.body.mail);
  // console.log(req.body.pass);
  const quer =
    'SELECT id, title, price, count FROM `cardstore`.`cartuser` WHERE username = ' + `"${req.body.mail}"`;
  console.log(quer);

  conn.query(quer, function (err, results, fields) {
    res.status(200).json(results);
  });
});

app.post('/shoper', (req, res) => {

let qweq = 'SELECT title FROM cardstore.cartuser where title=' + `"${req.body.title}"`
console.log(qweq)
  conn.query(qweq,
    function (err, results, fields) {
      
      if (results[0] == undefined) {
        const quer =
    'INSERT INTO `cardstore`.`cartuser` (`username`, `title`, `price`, `count`) VALUES (' +
    `"${req.body.mail}", "${req.body.title}", ${req.body.price}, ${req.body.count})`;

  conn.query(quer, function (err, results, fields) {
    console.log(quer);
    res.status(200).json(results);
  });
      } else {
        const quer =
        "UPDATE `cardstore`.`cartuser` SET count= "+`${req.body.count}`+" WHERE title= "+`"${req.body.title}"` ;
    
      conn.query(quer, function (err, results, fields) {
        console.log(quer);
        res.status(200).json(results);
      });
      }
     
    },
  );

});

app.post('/delshoper', (req, res) => {
  if (req.body.mail == '') {
    console.log('none email');
  } else {
    console.log('email exist');
    const quer = 'DELETE FROM `cardstore`.`cartuser` WHERE id=' + `${req.body.id}`;

    conn.query(quer, function (err, results, fields) {
      console.log(quer);
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
