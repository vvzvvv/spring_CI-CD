module.exports = (sequelize, Sequelize) => {
    /*
    prescription_report_id: 복용내역 ID
    prescription_date: 복용 날짜
    prescription_time: 복용 시간대
    prescription_id: 약 ID(FK)

    외래키 필드는 시퀄라이즈가 생성
    */
    const PrescriptionReport = sequelize.define("prescription_report", {
        prescription_report_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        prescription_report_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        prescription_report_time: {
            type: Sequelize.TIME,
            allowNull: false
        }
    },

    {timestamps: false}

    );
    return PrescriptionReport;
}