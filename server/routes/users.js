const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const user = require('../controllers/user');

router.post('/loginWithEmail', user.loginWithEmail);

router.get('/', auth.verifyToken, (req, res) => {
  console.log(req.uid);
  res.send('received');
});

module.exports = router;
