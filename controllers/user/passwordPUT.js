const db = require('../../models/index');
const bcrypt = require('bcrypt');


// 토큰을 위한 모듈
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.MY_SECRET;


const changePassword = async function (req, res) {
    const { newPassword, doubleCheckNewPassword } = req.body;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    console.log(token);
    
    // 비밀번호 더블체크 로직
    if (newPassword !== doubleCheckNewPassword) {
        return res.status(400).send('비밀번호 불일치');
    }

    try {
        
        // 토큰으로부터 이메일 추출
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;
        console.log(email);

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const user = await db.user.update(
            { password: hashedNewPassword }, 
            {
                where: { email },
            },
        );

        // 비밀번호 변경 후 토큰 데이터베이스에 저장되어 있는 토큰 삭제
        const passwordToken = await db.passwordToken.findOne({ where: {email: email} });
        console.log(passwordToken);
        await passwordToken.destroy();


        if (!user) {
            return res.status(404).send({message: "존재하지 않는 사용자입니다."});
        }

        res.status(200).send({
            message: "비밀번호 변경이 완료되었습니다.",
            token: token
        });
    } catch (error) {
        res.status(500).send({ message: "비밀번호 변경이 실패하였습니다.\n나중에 다시 시도해주세요."});
    }
};

module.exports = changePassword;