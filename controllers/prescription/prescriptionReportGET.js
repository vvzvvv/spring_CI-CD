const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const { getPrescriptionReport, getPrescriptionContent } = require("../../models/prescriptionQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;
        //console.log(userID);
        const result = await getPrescriptionReport(userID);
        console.log(result);
        return result;

    }
    catch(err) {
        console.error(err);

    }
}