var express = require('express');
var router = express.Router();
const diaryGET = require('../../controllers/diary/diaryGET');
const diaryPOST = require('../../controllers/diary/diaryPOST');

router.get('/', function(req, res, next) {
    res.render('diary/diary');
});

router.get('/:date',diaryGET);
router.post('/', diaryPOST);
// router.get('/:date', diaryController.getDiaryByDate);
// router.post('/:date/photo', diaryController.addPhoto);
// router.delete('/photo/:id', diaryController.deletePhoto);

module.exports = router;

