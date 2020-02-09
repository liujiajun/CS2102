const { db } = require('../database/db');
const Utils = require('./utils');

const User = {
  async loginWithEmail(req, res) {
    if (!req.body.email || !req.body.password || !req.body.role) {
      res.status(400).send({ message: 'Some fields are missing.' });
      return;
    }

    const idQuery = "SELECT uid FROM Auths WHERE type='email' AND name=$1 AND token=$2";

    let uid;
    try {
      const result = await db.one(idQuery, [req.body.email, req.body.password]);
      uid = result.uid;
    } catch (e) {
      res.status(400).send({ message: 'Bad credential.' });
      return;
    }

    const userInfoQuery = `SELECT * FROM ${Utils.getUserTableName(req.body.role)} WHERE id=$1`;

    try {
      const result = await db.one(userInfoQuery, [uid]);
      const token = Utils.generateToken(result.id);
      res.send(token);
      return;
    } catch (e) {
      res.status(400).send({ message: 'Bad credential.' });
    }
  },
};

module.exports = User;
