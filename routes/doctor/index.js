var express = require('express');
const searchPatientPOST = require('../../controllers/doctor/searchPatientPOST');
const addPatientPOST = require('../../controllers/doctor/addPatientPOST');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=>{
  res.render('doctor/popupAddPatient');   //(임시)
});

// 환자 검색 post 
router.post('/searchPatient/:searchInput', searchPatientPOST);

// 환자 추가 신청 post
router.post('/addPatient', addPatientPOST);

module.exports = router;