const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const { getPrescriptionReport, getPrescriptionContent } = require("../../models/prescriptionQuery");

module.exports = async (userID) => {
    try { 
        const result = await getPrescriptionReport(userID);
        return result;

    }
    catch(err) {
        console.error(err);

    }
}