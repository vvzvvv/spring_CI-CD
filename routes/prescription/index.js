var express = require('express');
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

/* GET home page. */
router.get('/', async(req, res)=> {
    const prescriptionContent = await prescriptionContentGET();
    const prescriptionReport = await prescriptionReportGET();
    const chart = await chartGET();
    res.render('prescription/prescription', {prescriptionContent: prescriptionContent,
        prescriptionReport: prescriptionReport, chart: chart});
});

//처방약
router.post('/content', prescriptionContentPOST);
router.put('/contentEdit/:prescriptionID', prescriptionContentEDIT);
router.delete('/contentDelete/:prescriptionID', prescriptionContentDELETE);

//복용 기록
router.post('/report', prescriptionReportPOST);
router.put('/reportEdit/:reportID', prescriptionReportEDIT);
router.delete('/reportDelete/:reportID', prescriptionReportDELETE); 



module.exports = router;


