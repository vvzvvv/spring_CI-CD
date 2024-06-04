const mongoose = require('mongoose');

const DiarySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    weather: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Diary', DiarySchema);