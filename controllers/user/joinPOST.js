const db = require('../../models/index');
const dotenv = require('dotenv');

dotenv.config();


const join = async (req, res) => {
    try {
        const { email, password, passwordCheck} = req.body;

        // 비밀번호 일치여부 검증 로직
        if (password !== passwordCheck) {
            return res.status(409).send({message: "비밀번호가 일치하지 않습니다.\n다시 입력해주세요."});
        }

        // 새로운 사용자 회원가입
        else {
            const newUser = await db.user.create({
                email: email,
                password: password
            });
            
            return res.status(200).send({ message: "회원가입 되었습니다.\n로그인 해주세요."});
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = join;