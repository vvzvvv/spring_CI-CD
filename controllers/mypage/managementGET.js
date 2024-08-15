const {getManagementList} = require("../../models/myPageQuery");
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userID = await authenticateToken(token);

        const result = await getManagementList(userID);
        
        res.status(200).json(result);
    }
    catch(err) {
        console.log(err);
    }
}