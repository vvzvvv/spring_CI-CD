const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const { getChart } = require("../../models/prescriptionQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;

        const result = await getChart(userID);
        // .then(data => {
        //     console.log(JSON.stringify(data, null, 2));
        // }).catch(error => {
        //     console.error(error);
        // });

        console.log(result);
        return result;
    }
    catch(err) {
        console.log(err);
    }
}

