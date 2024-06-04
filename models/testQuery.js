const { where } = require('sequelize');
const db = require('./index');

const postTest = async(date, score, resultString) => {
    const data = await db.test.create({
        result: resultString,
        test_date: date,
        total_score: score,
        user_id: 1,
    })
    console.log(data);
    return data;
}

const getTestList = async() => {
    const data = await db.test.findAll({})
    // console.log(data);
    return data;
}

const getTest = async(testID) => {
    const data = await db.test.findAll({
        where: {
            test_id: testID,
        }
    })
    return data;
}

module.exports = {
    postTest,
    getTestList,
    getTest,
}