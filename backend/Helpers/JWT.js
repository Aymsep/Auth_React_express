const jwt = require('jsonwebtoken');

class JwtManager {
  sign(payload, expiresIn = '1h') {
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn });
      return token;
    } catch (error) {
      throw error;
    }
  }

  verify(token) {
    try {
      const decoded = jwt.verify(token, 'secretkey');
      return decoded;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = new JwtManager