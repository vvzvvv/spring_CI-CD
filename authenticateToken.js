const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        res.sendStatus(401).send({message: "로그인이 필요한 서비스입니다."}); // Unauthorized
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403).send({message: "다시 로그인해주세요."}); // Forbidden
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;