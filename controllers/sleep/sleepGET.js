const { getSleepReportByDate } = require('../../models/sleepQuery');

module.exports = async (req, res) => {
    try {
        const sleepReport = await getSleepReportByDate(date);
        const currentDate = date || new Date().toISOString().split('T')[0];

        res.render('sleep/sleep', { 
            sleepReport: sleepReport || {}, 
            currentDate 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}; 





