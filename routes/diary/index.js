var express = require('express');
var router = express.Router();
// const diaryController = require('../controllers/diaryController');

router.get('/', function(req, res, next) {
    res.render('diary/diary');
});

// router.post('/', diaryController.saveDiary);
// router.get('/:date', diaryController.getDiaryByDate);
// router.post('/:date/photo', diaryController.addPhoto);
// router.delete('/photo/:id', diaryController.deletePhoto);

module.exports = router;

