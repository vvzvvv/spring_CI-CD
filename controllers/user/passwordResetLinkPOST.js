const smtpTransport = require("../../emailVerificationConfig");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.MY_SECRET;

const db = require('../../models/index');

const findPassword = async function (req, res) {

    const { email } = req.body;

    try {
        const token = jwt.sign({email}, secretKey);
        
        await db.passwordToken.create({email, token});     // db에 resetToken 모델 생성해야 함

        const resetLink = `http://localhost:3000/user/password/change?token=${token}`;      // 서버 url 수정(.env파일 사용)

        const emailOptions = {
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: "[spring] 비밀번호 초기화 링크",
            text: `비밀번호 초기화 링크: ${resetLink}`
        };
        
        await smtpTransport.sendMail(emailOptions);
        res.status(200).send({
            message: "비밀번호 초기화 링크 전송 성공",
        });
    } catch (error) {
        console.error('링크 전송 실패', error);
        res.status(500).send('링크 전송 실패');
    } finally {
        smtpTransport.close();
    }
};

module.exports = findPassword;