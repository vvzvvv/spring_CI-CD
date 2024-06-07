const diaryQuery = require('../../models/diaryQuery');
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');

const upload = multer({
    storage: new multerGoogleStorage.storageEngine({
        bucket: 'spring-image',
        projectId: 'server-system-425608',
        keyFilename: 'server-system-425608-fa659756e648.json',
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

module.exports = [upload.single('photo'), async (req, res) => {
    console.log("...");
    const { userID, diaryID, date, weather, contents } = req.body;
    const photoFile = req.file; // multer를 통해 업로드된 파일

    if (!photoFile) {
        return res.status(400).json({ message: '사진을 선택하세요.' });
    }

    try {
        const photoUrl = `https://storage.googleapis.com/spring-image/${photoFile.filename}`;
        console.log('업로드된 파일:', photoFile);

        console.log('일기 저장 요청:', { userID, diaryID, date, weather, contents, photoUrl });
        const entry = await diaryQuery.saveDiaryEntry(userID, diaryID, date, weather, contents, photoUrl);
        res.status(200).json({ message: '저장 완료', entry });
    } catch (error) {
        console.error('일기 저장 중 오류 발생:', error);
        res.status(500).json({ message: '저장 실패', error: error.message });
    }
}];
