const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const { getPrescriptionContent } = require("../../models/prescriptionQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;
        //console.log(userID);
        const result = await getPrescriptionContent(userID);
        // const data = [];
        // for(var medicine of result){
        //     data.push(medicine.get(0));
        // }
        // console.log(data[0]);
        // return data[0];
        return result;
    }
    catch(err) {
        console.log(err);
    }
}