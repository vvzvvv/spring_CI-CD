var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sleep page. */
router.get('/sleep', (req, res) => {
  res.render('sleep', { currentDate: new Date() });
});

module.exports = router;
