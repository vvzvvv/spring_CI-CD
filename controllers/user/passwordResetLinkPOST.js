const smtpTransport = require("../../emailVerificationConfig");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.MY_SECRET;

const db = require('../../models/index');

const findPassword = async function (req, res) {

    const { email } = req.body;

    try {

        /* 등록된 이메일인지 확인 */

        // user 데이터베이스에서 존재하는 환자 이메일인지 확인
        const findPatient = await db.user.findOne({ where: { email: email } });
        // doctor 데이터베이스에서 존재하는 의사 이메일인지 확인
        const findDoctor = await db.doctor.findOne({ where: { email: email } });

        console.log(findPatient);
        console.log(findDoctor);

        // 환자, 의사 둘다 찾지 못한 경우
        if (findPatient === null && findDoctor === null) {
            console.log("등록된 이메일이 아닙니다.");
            return res.status(404).send({ message: "등록된 이메일이 아닙니다.\n이메일을 확인해주세요." });
        }

        let token = '';

        // 환자 이메일인 경우
        if (findPatient) {
            token = jwt.sign({ email: email, user: "patient" }, secretKey);
        }

        // 의사 이메일인 경우
        if (findDoctor) {
            token = jwt.sign({ email: email, user: "doctor" }, secretKey);
        }
        
        console.log(token);
        
        await db.passwordToken.create({ email, token });     // db에 resetToken 모델 생성해야 함

        const resetLink = `http://localhost:3000/user/password/change?token=${token}`;      // 서버 url 수정(.env파일 사용)

        const emailOptions = {
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: "[spring] 비밀번호 초기화 링크",
            text: `비밀번호 초기화 링크: ${resetLink}`
        };
        
        await smtpTransport.sendMail(emailOptions);

        res.status(200).send({
            message: "입력하신 이메일로 비밀번호 초기화 링크를 전송하였습니다.",
        });
    } catch (error) {
        res.status(500).send({message: "링크 전송 실패이 실패하였습니다.\n나중에 다시 시도해주세요."});
    } finally {
        smtpTransport.close();
    }
};

module.exports = findPassword;