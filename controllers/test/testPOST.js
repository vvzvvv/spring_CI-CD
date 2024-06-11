// const responseMessage = require("../../constants/responseMessage");
// const statusCode = require("../../constants/statusCode");
const {postTest} = require("../../models/testQuery");

module.exports = async (req, res) => {
    try {
        const {date, score, resultString} = req.body;
        const userID = 1;
        const result = await postTest(date, score, resultString, userID);
        if(result.error){
            console.log(result.error);
            return res.status(201).json({
                status: "fail",
                data: result.data,
            })
        }
        return res.status(200).json({
            status: "success",
            data: result
        });
    }
    catch(err) {
        console.error(err);

        return res.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
}