const { getTotalSleepTime } = require('../../models/sleepQuery');
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => {
    try {

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userId = await authenticateToken(token);

        const totalSleepTime = await getTotalSleepTime(userId);
        res.status(200).json(totalSleepTime);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
