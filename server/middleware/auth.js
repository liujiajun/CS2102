const jwt = require('jsonwebtoken');
const { db } = require('../database/db');

const Auth = {
  async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
      res.status(400).send({ message: 'Unauthorized user.' });
      return;
    }

    const query = 'SELECT 1 FROM Users WHERE id=$1';
    let decoded;
    try {
      decoded = await jwt.verify(token, 'secret');
      await db.one(query, [decoded.uid]);
    } catch (e) {
      res.status(400).send({ message: 'Unauthorized user.' });
    }
    req.uid = decoded.uid;
    next();
  },
};

module.exports = Auth;
