const db = require('../../models/index');


const emailCheck = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(req.body.email);
        
        // 이미 등록된 사용자인지 확인
        const existUser = await db.user.findOne({ where: { email: email }});

        if (existUser) {
            return res.status(404).send({
                message: "기존 등록된 사용자입니다."
            });
        }
        
        res.status(200).send({
            message: "등록 가능한 이메일입니다."
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

module.exports = emailCheck;