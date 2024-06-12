const {postPrescriptionContent} = require("../../models/prescriptionQuery");

module.exports = async (req, res) => {
    try {
        const userID = 1;

        const {name, date, amount} = req.body;
        
        const data = await postPrescriptionContent(name, date, amount, userID);
        // 저장이 되면 result에 값이 담긴다.
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