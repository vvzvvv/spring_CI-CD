module.exports = (sequelize, Sequelize) => {
    /*
    management_id: 환자관리 ID
    doctor_id: 의사 ID
    user_id: 환자 ID
    */
    const PatientManagement = sequelize.define('patient_management', {
        management_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        doctor_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });

    return PatientManagement;
}
