const { where } = require('sequelize');
const db = require('./index');
//const prescription_report = require('./prescription_report');
//const prescription = require('./prescription');

// 처방약 기록 get
const getPrescriptionContent = async(userID) => {
    const data = await db.prescription.findAll({
        where: {
            user_id: userID,
        }
    })
    //console.log(data);
    return data;
}

// 차트
const getChart = async(userID) => {
    try {
        const data = await db.prescription.findAll({
            attributes: [
                'prescription_name',
                'prescription_date',
                'prescription_amount',
                'user_id'
            ],
            order: [
                ['prescription_name', 'ASC'],
                ['prescription_date', 'ASC']
            ]
        });

        const groupedData = data.reduce((acc, prescription) => {
            const { prescription_name } = prescription;
            if (!acc[prescription_name]) {
                acc[prescription_name] = [];
            }
            acc[prescription_name].push(prescription);
            return acc;
        }, {});
        //console.log(groupedData);

        return groupedData;


    } catch (error) {
        console.error('Error fetching prescriptions:', error);
        throw error;
    }

}






// 처방약 기록 post
const postPrescriptionContent = async(name, date, amount, userID) => {
    try {
        const data = await db.prescription.create({
            prescription_name: name,
            prescription_date: date,
            prescription_amount: amount,
            user_id: userID
        })
        //console.log(data);
        return data;
    } catch (err) {

    }
}


// 복용약 기록 get
const getPrescriptionReport = async(userID) => {

    const data = await db.prescriptionReport.findAll({
        include : [
            {
                model: db.prescription,
                attributes: ['prescription_name', 'prescription_amount'],
                required: true
            }
        ]
    })
    
    //console.log(data);

    return data;
}


const postPrescriptionReport = async(date, time, userID, prescriptionID) => {
    try {
        const prescriptionReport = await db.prescriptionReport.create({
            prescription_report_date: date,
            prescription_report_time: time,
            user_id: userID,
            prescription_id: prescriptionID,
        });

        return prescriptionReport;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


module.exports = {
    getPrescriptionContent,
    postPrescriptionContent,
    getPrescriptionReport,
    postPrescriptionReport,
    getChart
}