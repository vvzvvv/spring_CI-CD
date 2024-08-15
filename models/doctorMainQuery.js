//getMyPatients

//getRequestList

//cancelRequest

const { Op } = require('sequelize');
const db = require('./index');

const getMyPatients = async (doctorId, searchInput) => {
    try {
        // 의사가 관리하는 환자 리스트 불러오기
        const data = await db.patientManagement.findAll({
            where: {
                doctor_id: doctorId
            },
            include: [{
                model: db.user,
                attributes: ['email', 'name']
            }]
        });

        // 불러온 환자 리스트 중에서 써치인풋에 해당하는 환자를 필터링하기
        const filteredData = data.filter(patient => 
            patient.user.email.includes(searchInput) || 
            patient.user.name.includes(searchInput)
        );

        return filteredData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getRequestList = async (doctorId) => {
    try {

        const requests = await db.requestStatus.findAll({
            where: {
                doctor_id: doctorId,
                is_accepted: 0
            },
            include: [{
                model: db.user,
                attributes: ['email', 'name', 'user_id']
            }]
        });

        return requests;
    } catch (error) {
        console.error('Error fetching request list:', error);
        throw error;
    }
};

const cancelRequest = async (doctorId, userId) => {
    try {
        const result = await db.requestStatus.destroy({
            where: {
                doctor_id: doctorId,
                user_id: userId
            }
        });

        return result;
    } catch (error) {
        console.error('Error cancelling request:', error);
        throw error;
    }
};

module.exports = {
    getMyPatients,
    getRequestList,
    cancelRequest,
};


