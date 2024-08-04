module.exports = (sequelize, Sequelize) => {
    /*
    request_id: 요청 ID
    doctor_id: 의사 ID
    user_id: 환자 ID
    */
    const RequestStatus = sequelize.define('request_status', {
        request_id: {
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
        is_accepted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    });

    return RequestStatus;
}
