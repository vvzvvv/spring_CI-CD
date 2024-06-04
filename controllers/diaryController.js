const Diary = require('../models/diaryModel');
const Photo = require('../models/diaryphotoModel');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

exports.saveDiary = async (req, res) => {
    try {
        const diary = await Diary.findOneAndUpdate(
            { date: req.body.date },
            { weather: req.body.weather, content: req.body.content, updatedAt: Date.now() },
            { upsert: true, new: true }
        );
        res.status(200).json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Error saving diary entry', error });
    }
};

exports.getDiaryByDate = async (req, res) => {
    try {
        const diary = await Diary.findOne({ date: req.params.date });
        if (!diary) return res.status(404).json({ message: 'Diary entry not found' });
        res.status(200).json(diary);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching diary entry', error });
    }
};

exports.addPhoto = [upload.single('file'), async (req, res) => {
    try {
        const diary = await Diary.findOne({ date: req.params.date });
        if (!diary) return res.status(404).json({ message: 'Diary entry not found' });

        const photo = new Photo({ diary: diary._id, filename: req.file.filename });
        await photo.save();
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading photo', error });
    }
}];

exports.deletePhoto = async (req, res) => {
    try {
        await Photo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting photo', error });
    }
};
