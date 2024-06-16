const { where } = require('sequelize');
const db = require('./index');

async function saveDiaryEntry(userID, diaryID, date, weather, contents, photoUrl) {
    try {
        const [entry, created] = await db.diary.upsert({
            diary_id: diaryID,
            diary_date: date,
            weather: weather,
            contents: contents,
            photo: photoUrl,
            user_id: userID
        });
        console.log('일기 저장 완료:', entry);
        return entry;
    } catch (error) {
        console.error('일기 저장 중 오류 발생:', error);
        throw error;
    }
}

async function getDiaryEntry(date) {
    try {
        const entry = await db.diary.findOne({ where: { diary_date: date } });
        return entry || {}; // 데이터가 없으면 빈 객체를 반환
    } catch (error) {
        console.error('일기 불러오기 중 오류 발생:', error);
        throw error;
    }
}

async function addPhoto(date, photo) {
    try {
        await Diary.update({ photo }, { where: { date } });
        console.log('사진 추가 완료');
    } catch (error) {
        console.error('사진 추가 중 오류 발생:', error);
        throw error;
    }
}

async function deletePhoto(date) {
    try {
        await Diary.update({ photo: null }, { where: { date } });
        console.log('사진 삭제 완료');
    } catch (error) {
        console.error('사진 삭제 중 오류 발생:', error);
        throw error;
    }
}

module.exports = {
    saveDiaryEntry,
    getDiaryEntry,
    addPhoto,
    deletePhoto
};
