const { getLast7DaysSleepData } = require('../../models/sleepQuery');
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userId = await authenticateToken(token);

        const sleepData = await getLast7DaysSleepData(userId);
        res.status(200).json(sleepData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};




