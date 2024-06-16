var express = require('express');
var router = express.Router();
const sleepPOST = require('../../controllers/sleep/sleepPOST');
const getLast7DaysSleep = require('../../controllers/sleep/getLast7DaysSleep');
const getTotalSleepTime = require('../../controllers/sleep/getTotalSleep');
const sleepByDateGET = require('../../controllers/sleep/sleepByDateGET');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sleep/sleep', { currentDate: new Date() });
});

router.get('/date/:date', sleepByDateGET);
router.get('/last7days', getLast7DaysSleep);
router.get('/total', getTotalSleepTime);
router.post('/save', sleepPOST);

module.exports = router;





