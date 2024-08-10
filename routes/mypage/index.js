var express = require('express');
const testPOST = require('../../controllers/test/testPOST');
const testListGET = require('../../controllers/test/testListGET');
const testGET = require('../../controllers/test/testGET');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=>{
  res.render('mypage/mypage');
});

module.exports = router;