module.exports = (sequelize, Sequelize) => {
    const PasswordToken = sequelize.define('passwordToken', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
    });

    return PasswordToken;
}
