var express = require('express');
const authenticateToken = require("../../authenticateToken");
const prescriptionContentGET = require('../../controllers/prescription/prescriptionContentGET');
const prescriptionContentPOST = require('../../controllers/prescription/prescriptionContentPOST');
const prescriptionContentEDIT = require('../../controllers/prescription/prescriptionContentEDIT');
const prescriptionContentDELETE = require('../../controllers/prescription/prescriptionContentDELETE');

const prescriptionReportGET = require('../../controllers/prescription/prescriptionReportGET');
const prescriptionReportPOST = require('../../controllers/prescription/prescriptionReportPOST');
const prescriptionReportEDIT =  require('../../controllers/prescription/prescriptionReportEDIT');
const prescriptionReportDELETE =  require('../../controllers/prescription/prescriptionReportDELETE');

const chartGET = require('../../controllers/prescription/chartGET');

var router = express.Router();
var userID = 0;

/* GET home page. */
router.get('/', async(req, res)=> {
    let prescriptionContent = [];
    let prescriptionReport = [];
    let chart = [];

    if (userID !== 0) {
        prescriptionContent = await prescriptionContentGET(userID);
        prescriptionReport = await prescriptionReportGET(userID);
        chart = await chartGET(userID);
    }

    res.render('prescription/prescription', {
        prescriptionContent: prescriptionContent,
        prescriptionReport: prescriptionReport,
        chart: chart
    });
});

router.get('/refresh',async(req, res)=>{
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        userID = await authenticateToken(token);
        res.status(200).send('Token authenticated');
    } else {
        res.status(401).send('Unauthorized');
    }
})



//처방약
router.post('/content', prescriptionContentPOST);
router.put('/contentEdit/:prescriptionID', prescriptionContentEDIT);
router.delete('/contentDelete/:prescriptionID', prescriptionContentDELETE);

//복용 기록
router.post('/report', prescriptionReportPOST);
router.put('/reportEdit/:reportID', prescriptionReportEDIT);
router.delete('/reportDelete/:reportID', prescriptionReportDELETE); 



module.exports = router;


