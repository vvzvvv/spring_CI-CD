module.exports = (sequelize, Sequelize) => {
    const PasswordToken = sequelize.define('password_token', {
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
