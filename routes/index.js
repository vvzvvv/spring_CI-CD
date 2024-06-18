var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/user', require('./user'));
router.use('/exercise', require('./exercise'));
router.use('/diary',require('./diary'));
router.use('/test',require('./test'));
router.use('/prescription',require('./prescription'));
router.use('/sleep',require('./sleep'));

module.exports = router;


