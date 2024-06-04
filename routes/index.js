var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/sleep', (req, res) => {
  res.render('sleep', { currentDate: new Date() });
});
router.use('/diary',require('./diary'));
router.use('/test',require('./test'));

module.exports = router;
