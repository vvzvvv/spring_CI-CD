const { getMyPatients } = require('../../models/doctorMainQuery');
const { authenticateTokenDoctor } = require('../../authenticateToken');

module.exports = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const doctorId = await authenticateTokenDoctor(token);

        const { searchInput } = req.body;

        const patients = await getMyPatients(doctorId, searchInput);

        res.json(patients);
    } catch (error) {
        console.error('Error searching patients:', error);
        res.status(500).json({ error: '환자 검색에 실패했습니다.' });
    }
};