const { createSleepReport } = require("../../models/sleepQuery");


module.exports = async (req, res) => {
    try {
        const { sleep_date, wake_date, sleep_rate, sleep_duration, start_sleep_time, end_sleep_time, user_id } = req.body;
        
        console.log("Received data from client:", req.body);
        console.log("sleep_date:", req.body.sleep_date);
        console.log("start_sleep_time:", req.body.start_sleep_time);
        console.log("end_sleep_time:", req.body.end_sleep_time);
        console.log("sleep_duration:", req.body.sleep_duration);

        const report = await createSleepReport(sleep_date, wake_date, sleep_rate, sleep_duration, start_sleep_time, end_sleep_time, 1);
        
        if (report) {
            res.status(200).send({
                message: '수면을 기록하였습니다.'
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};







