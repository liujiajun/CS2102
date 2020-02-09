const jwt = require('jsonwebtoken');

const Utils = {
  generateToken(id) {
    const token = jwt.sign({
      uid: id,
    }, 'secret', { expiresIn: '7d' });
    return token;
  },

  getUserTableName(role) {
    if (role === 'customer') {
      return 'Customers';
    }
    if (role === 'restaurant') {
      return 'Restaurants';
    }
    if (role === 'rider') {
      return 'Riders';
    }
    if (role === 'admin') {
      return 'Admins';
    }
    return null;
  },
};

module.exports = Utils;
