const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    /*
    user_id: 회원 ID
    name: 이름
    email: 이메일
    password: 비밀번호
    medicine_agreement: 복용약기록 정보제공 동의여부
    sleep_agreement: 수면기록 정보제공 동의여부
    exercise_agreement: 운동기록 정보제공 동의여부
    test_agreement: 테스트기록 정보제공 동의여부
    */
    const User = sequelize.define('user', {
        user_id: {
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
        medicine_agreement: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
        },
        sleep_agreement: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
        },
        exercise_agreement: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
        },
        test_agreement: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
        },
    },
    {
        timestamps: false,
        hooks: {
            beforeSave: async (user) => {
                let hash = await bcrypt.hash(user.password, 10);
                user.password = hash;
            }
        }
    });

    return User;
}
