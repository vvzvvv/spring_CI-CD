const { getPatientSearch, getRequestStatus, getPatientManagement } = require("../../models/addPatientQuery");

module.exports = async (req, res) => {
    try {
        const searchInput = req.params.searchInput;
        const doctorId = 1; // 의사 아이디 (임시)
        
        const patients = await getPatientSearch(searchInput);
        
        const result = await Promise.all(patients.map(async (patient) => {
            const userId = patient.user_id;

            const requestStatus = await getRequestStatus(doctorId, userId);
            const patientManagement = await getPatientManagement(doctorId, userId);
            
            let buttonType = "추가하기";
            if (patientManagement) {
                buttonType = "추가완료";
            } else if (requestStatus && requestStatus.is_accepted == 0) {
                buttonType = "승인 대기중";
            }

            return {
                email: patient.email,
                name: patient.name,
                userId: patient.user_id,
                buttonType
            };
        }));

        res.json(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
