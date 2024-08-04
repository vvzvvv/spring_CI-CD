const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    /*
    doctor_id: 의사 ID
    name: 의사명
    email: 이메일
    password: 비밀번호
    license_number: 의사면허번호
    license: 의사 면허
    */
    const Doctor = sequelize.define("doctor", {
        doctor_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        license_number: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        license: {
            type: Sequelize.BLOB,
            allowNull: false
        }
    },
    {
        timestamps: false,
        hooks: {
            beforeSave: async (doctor) => {
                let hash = await bcrypt.hash(doctor.password, 10);
                doctor.password = hash;
            }
        }
    });

    return Doctor;
}
