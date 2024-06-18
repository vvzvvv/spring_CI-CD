// const responseMessage = require("../../constants/responseMessage");
// const statusCode = require("../../constants/statusCode");
const {getTestList} = require("../../models/testQuery");
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => 
    {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }
    try {
        const userID = await authenticateToken(token);
        const result = await getTestList(userID);
        let testList = [];
        for(var test of result){   
            testList.push(test.get(0));
        }
        // console.log("result", testList);
        res.status(200).json(testList);
    }
    catch(err) {
        console.log(err);
    }
}