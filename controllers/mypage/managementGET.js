const {getManagementList} = require("../../models/myPageQuery");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.MY_SECRET;

module.exports = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        console.log("token: ", token);

        const decode = jwt.verify(token, secretKey);
        console.log("decode: ", decode);

        const patientId = decode.userId;

        const result = await getManagementList(patientId);
        console.log("result: ", result);
        
        res.status(200).json(result);
    }
    catch(err) {
        console.log(err);
    }
}