// const responseMessage = require("../../constants/responseMessage");
// const statusCode = require("../../constants/statusCode");
const {getTestList} = require("../../models/testQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;
        const result = await getTestList(userID);
        let testList = [];
        for(var test of result){   
            testList.push(test.get(0));
        }
        // console.log("result", testList);
        return testList;
    }
    catch(err) {
        console.log(err);
    }
}