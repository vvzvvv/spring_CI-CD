const diaryQuery = require('../../models/diaryQuery');

module.exports = async (req, res) => {
    const { date } = req.params;
    console.log(date);
    try {
        console.log('일기 불러오기 요청:', date);
        const entry = await diaryQuery.getDiaryEntry(date);
        var diary = {};
        if (Object.keys(entry).length != 0) {
            diary = entry.get(0);
            if (diary.photo) {
                diary.photo = `${diary.photo}`;
            }
            console.log(diary);
            return res.status(200).json({ diary });
        } else {
            console.log(diary);
            return res.status(200).json({ diary });
        }
    } catch (error) {
        console.error('일기 불러오기 중 오류 발생:', error);
        res.status(500).json({ message: '일기 항목을 가져오는 중 오류 발생', error: error.message });
    }
};