module.exports = (sequelize, Sequelize) => {
    /*
    prescription_id: 약 ID
    name: 약 이름
    prescription_date: 처방날짜
    prescription_amount: 처방량
    */
    const Prescription = sequelize.define("prescription", {
        prescription_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        prescription_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prescription_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        prescription_amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

    },

    {timestamps: false}
    
    );
    return Prescription;
}