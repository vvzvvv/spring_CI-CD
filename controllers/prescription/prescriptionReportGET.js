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

        // 처방약 테이블 가져오기
        //const prescription = await getPrescriptionContent(userID);

    }
    catch(err) {
        console.error(err);

    }
}