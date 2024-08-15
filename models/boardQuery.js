const db = require('./index');

async function getUserInfo(userID) {
    try {
        const user = await db.user.findOne({ where: {user_id: userID} });
        const userInfo = {
            "user_id" : user.user_id,
            "name" : user.name,
            "medicine_agreement": user.medicine_agreement,
            "sleep_agreement" : user.sleep_agreement,
            "exercise_agreement" : user.exercise_agreement,
            "test_agreement" : user.test_agreement,
        }
        return userInfo || {}; // 데이터가 없으면 빈 객체를 반환
    } catch (error) {
        console.error('Error in board :', error);
        throw error;
    }
}

module.exports = {
    getUserInfo,
};