const bcrypt = require('bcrypt');

const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

var db = require('../../models/index');

const login = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        // user 데이터베이스에서 존재하는 환자 이메일인지 확인
        const findPatient = await db.user.findOne({ where: {email: email} });
        
        // doctor 데이터베이스에서 존재하는 의사 이메일인지 확인
        const findDoctor = await db.doctor.findOne({ where: {email: email} });
        
        console.log(findPatient);
        console.log(findDoctor);
        
        // 환자, 의사 둘다 찾지 못한 경우
        if (findPatient === null && findDoctor === null) {
            return res.status(404).send({message: "존재하지 않는 사용자입니다.\n회원가입을 해주세요."});
        }

        // 환자가 로그인한 경우
        if (findPatient) {
            // 패스워드 일치 여부 확인
            const isPasswordValid = await bcrypt.compare(password, findPatient.password);
            if (!isPasswordValid) {
                return res.status(401).send({message: "비밀번호가 일치하지 않습니다.\n다시 입력해주세요."});
            }

            // 토큰 생성하고 응답에 토큰 담아서 보내줌
            const secretKey = process.env.MY_SECRET;
            const token = jwt.sign({userId: findPatient.user_id, user: "patient" }, secretKey);
            
            return res.status(200).send({
                message: "환자 로그인 되었습니다.",     // 추후 "로그인 되었습니다"로 수정 필요
                token: token,
                user: "patient"
            });
        }

        

        // 의사가 로그인한 경우
        if (findDoctor) {
            // 패스워드 일치 여부 확인
            const isPasswordValid = await bcrypt.compare(password, findDoctor.password);
            if (!isPasswordValid) {
                return res.status(401).send({message: "비밀번호가 일치하지 않습니다.\n다시 입력해주세요."});
            }

            // 토큰 생성하고 응답에 토큰 담아서 보내줌
            const secretKey = process.env.MY_SECRET;
            const token = jwt.sign({doctorId: findDoctor.doctor_id, user: "doctor" }, secretKey);

            console.log("token: ", token);
            
            return res.status(200).send({
                message: "의사 로그인 되었습니다.",     // 추후 "로그인 되었습니다"로 수정 필요
                token: token,
                user: "doctor"
            });
        }
        
    } catch(err) {
        res.status(500).send({
            message: "나중에 다시 시도해주세요."
        });
    }
}

module.exports = login;