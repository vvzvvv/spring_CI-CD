const { getSleepReportByDate } = require('../../models/sleepQuery');
const authenticateToken = require("../../authenticateToken");

module.exports = async (req, res) => {
    try {
        const {date} = req.params;

        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userId = await authenticateToken(token);

        // console.log("controller",date);
        const sleepDataByDate = await getSleepReportByDate(date, userId) || [];
        
        res.status(200).json(sleepDataByDate);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
