// Middleware for handling auth
require('dotenv').config({ path: '../../.env' });

const jwt = require('jsonwebtoken');
const key = process.env.JWT_PASS;
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  const word = token.split(' ');
  const jwtToken = word[1];
  console.log(`word: ${word} `);
  console.log(`jwtToken: ${jwtToken} `);
  const decoded = jwt.verify(jwtToken, key);
  if (decoded.username) {
    next();
  } else {
    res.status(403).json({
      msg: 'You are not authenticated',
    });
  }
}

module.exports = adminMiddleware;
