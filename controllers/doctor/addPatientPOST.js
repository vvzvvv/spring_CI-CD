const { postAddPatient } = require("../../models/addPatientQuery");

module.exports = async (req, res) => {
    try {
        const { userId } = req.body;
        const doctorId = 1; // 임시 의사 ID (나중에 수정)

        const patients = await postAddPatient(doctorId, userId);
        
        res.json({ success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: '환자 추가 실패' });
    }
};
