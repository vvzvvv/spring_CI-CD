const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    /*
    user_id: 회원 ID
    email: 이메일
    password: 비밀번호
    */
    const User = sequelize.define('user', {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
