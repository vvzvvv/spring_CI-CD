var express = require('express');
const managementGET = require('../../controllers/mypage/managementGET');
const managementPUT = require('../../controllers/mypage/managementPUT');
const agreementGET = require('../../controllers/mypage/agreementGET');
const agreementPUT = require('../../controllers/mypage/agreementPUT');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=>{
  res.render('mypage/mypage');
});

router.get('/managements', managementGET)
router.put('/managements',managementPUT)
router.get('/agreements', agreementGET);
router.put('/agreements', agreementPUT);

module.exports = router;