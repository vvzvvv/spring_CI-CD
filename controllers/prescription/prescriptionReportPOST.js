const {postPrescriptionReport} = require("../../models/prescriptionQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;
        
        const {date, time, prescriptionID} = req.body;
        //console.log(prescriptionID);

        const data = await postPrescriptionReport(date, time, userID, prescriptionID);
        
        if(data.error){
            console.log(data.error);
            return res.status(201).json({
                status: false,
                result: data.error,
            })
        }
        return res.status(200).json({
            status: true,
            result: data
        });
    }
    catch(err) {
        console.error(err);

        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
}