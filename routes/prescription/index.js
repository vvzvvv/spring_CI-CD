var express = require('express');
const prescriptionContentGET = require('../../controllers/prescription/prescriptionContentGET');
const prescriptionContentPOST = require('../../controllers/prescription/prescriptionContentPOST');
const prescriptionReportGET = require('../../controllers/prescription/prescriptionReportGET');
const prescriptionReportPOST = require('../../controllers/prescription/prescriptionReportPOST');
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

router.post('/', prescriptionContentPOST);

router.post('/report', prescriptionReportPOST);

module.exports = router;


