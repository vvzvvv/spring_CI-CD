const { getLast7DaysSleepData } = require('../../models/sleepQuery');

module.exports = async (req, res) => {
    try {
        const userId = 1;
        const sleepData = await getLast7DaysSleepData(userId);
        res.status(200).json(sleepData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};




