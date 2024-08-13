const db = require('../../models/index');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();


const join = async (req, res) => {
    try {
        const { name, email, password, passwordCheck, license_number } = req.body;

        // 비밀번호 일치여부 검증 로직
        if (password !== passwordCheck) {
            return res.status(409).send({message: "비밀번호가 일치하지 않습니다.\n다시 입력해주세요."});
        }

        if (!req.file) {
            return res.status(400).send({ message: "의사면허증을 업로드 해주세요." });
        }
        const licenseFilePath = req.file.path;
        //console.log("licenseFilePath: ", licenseFilePath);

        // 새로운 사용자 회원가입
        const newDoctor = await db.doctor.create({
            name: name,
            email: email,
            password: password,
            license_number: license_number,
            license: licenseFilePath
        });

        console.log("licenseFilePath: ", licenseFilePath);
            
        return res.status(200).send({ message: "회원가입 되었습니다.\n로그인 해주세요."});
        
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = join;