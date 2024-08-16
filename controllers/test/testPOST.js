// const responseMessage = require("../../constants/responseMessage");
// const statusCode = require("../../constants/statusCode");
const {postTest} = require("../../models/testQuery");
const {authenticateToken} = require("../../authenticateToken");


module.exports = async (req, res) => {
    try {
        const {date, score, resultString} = req.body;
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];

        console.log(token);

        const userId = await authenticateToken(token);
        console.log(userId);

        const result = await postTest(date, score, resultString, userId);
        
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