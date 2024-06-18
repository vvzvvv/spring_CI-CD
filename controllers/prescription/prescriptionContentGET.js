const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const { getPrescriptionContent } = require("../../models/prescriptionQuery");

module.exports = async (userID) => {
    try {
        console.log(userID);
        const result = await getPrescriptionContent(userID);

        return result;
    }
    catch(err) {
        console.log(err);
    }
}