const db = require('../../models/index');


const emailCheck = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body.email);
        
        // 이미 등록된 환자인지 확인
        const findUser = await db.user.findOne({ where: { email: email }});

        // 이미 등록된 의사인지 확인
        const findDoctor = await db.doctor.findOne({ where: { email: email }});

        // 기존 등록된 이메일인 경우
        if (findUser || findDoctor) {
            return res.status(404).send({
                message: "기존 등록된 사용자입니다."
            });
        }
        
        // 기존 등록된 이메일이 아닌 경우
        res.status(200).send({
            message: "회원가입 가능한 이메일입니다."
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = emailCheck;