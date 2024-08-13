const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const secretKey = process.env.MY_SECRET;

const authenticateToken = (token) => {
    console.log('authenticateToken: ', token);
    const decoded = jwt.verify(token, secretKey);
    console.log('decoded: ', decoded);
    const userId = decoded.userId;
    return userId;
}

module.exports = authenticateToken;