const {putAgreementList} = require("../../models/myPageQuery");
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => {
    try {
        const {medicine_agreement, sleep_agreement, exercise_agreement, test_agreement} = req.body;
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userID = await authenticateToken(token);
    
        const result = await putAgreementList(userID, medicine_agreement, sleep_agreement, exercise_agreement, test_agreement);
        
        res.status(200).json(result);
    }
    catch(err) {
        console.log(err);
    }
}