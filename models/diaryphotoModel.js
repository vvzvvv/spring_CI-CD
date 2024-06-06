const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    diary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    },
    filename: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Photo', PhotoSchema);
