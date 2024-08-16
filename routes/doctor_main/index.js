var express = require('express');
var router = express.Router();

// 컨트롤러 가져오기
const searchMyPatientsPOST = require('../../controllers/doctor_main/searchMyPatientsPOST');
const cancelRequestPOST = require('../../controllers/doctor_main/cancelRequestPOST');
const openPatientPageGET = require('../../controllers/doctor_main/openPatientPageGET');
const getRequestListGET = require('../../controllers/doctor_main/requestListGET')
const getAllPatientsGET = require('../../controllers/doctor_main/getAllPatientsGET');


router.get('/', async (req, res)=>{
  res.render('doctor_main/doctor_main');
});

// 새로운 라우트들 추가하기
router.post('/searchMyPatients', searchMyPatientsPOST);
router.get('/getRequestList', getRequestListGET);
router.post('/cancelRequest', cancelRequestPOST);
router.get('/board/:userId', openPatientPageGET);
router.get('/getAllPatients', getAllPatientsGET);

module.exports = router;