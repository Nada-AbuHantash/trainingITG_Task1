const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access dendid , No token provided');
  try {
    const decode = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decode;
    //    req.user._id
    next();
  }
  catch (ex) {
    res.status(400).send('invalid token ..')
  }
}