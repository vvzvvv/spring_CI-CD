const db = require('../../models/index');
const dotenv = require('dotenv');

dotenv.config();


const join = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 새로운 사용자 회원가입
        const newUser = db.user.create({
            email: email,
            password: password
        });
        
        res.status(201).send({
            message: "회원가입 완료"
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = join;