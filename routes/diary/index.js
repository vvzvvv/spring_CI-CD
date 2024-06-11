var express = require('express');
var router = express.Router();
const diaryGET = require('../../controllers/diary/diaryGET');
const diaryPOST = require('../../controllers/diary/diaryPOST');

router.get('/', function(req, res, next) {
    res.render('diary/diary');
});

router.get('/:date',diaryGET);
router.post('/', diaryPOST);

module.exports = router;

