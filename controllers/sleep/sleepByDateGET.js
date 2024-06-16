const { getSleepReportByDate } = require('../../models/sleepQuery');

module.exports = async (req, res) => {
    try {
        const userId = 1;
        const {date} = req.params;
        console.log("controller",date);
        const sleepDataByDate = await getSleepReportByDate(date, userId) || [];
        
        res.status(200).json(sleepDataByDate);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
