
const jwt = require("jsonwebtoken");

exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALT_KEY {expiresIn:"1d"})
}

exports.decodeToken = async (token) => {
  var data = await jwt.verify(token, global.SALT_KEY);
  return data
}