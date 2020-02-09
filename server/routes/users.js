const express = require('express');

const router = express.Router();
const db = require('../database/db');

/* GET users listing. */
router.get('/', (req, res) => {
  db.any('SELECT * FROM Sells')
    .then(((data) => {
      console.log(data.value);
    })
      .catch((e) => {
        console.log(e);
      }));
  res.send('respond with a resource');
});

module.exports = router;
