// const responseMessage = require("../../constants/responseMessage");
// const statusCode = require("../../constants/statusCode");
const {postTest} = require("../../models/testQuery");

module.exports = async (req, res) => {
    try {
        const {date, score, resultString} = req.body;
        const result = await postTest(date, score, resultString);
        res.render("/test");
    }
    catch(err) {
        console.log(err);
    }
}