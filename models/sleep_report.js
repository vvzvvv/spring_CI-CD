module.exports = (sequelize, Sequelize) => {
    const SleepReport = sequelize.define("sleep_report", {
        sleep_report_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        sleep_date: {
            type: Sequelize.DATEONLY,
            allowNull: true
            //allowNull: false
        },
        wake_date: {
            type: Sequelize.DATEONLY,
            allowNull: true
            //allowNull: false
        },
        sleep_rate: {
            type: Sequelize.INTEGER,
            allowNull: true
            //allowNull: false
        },
        sleep_duration: {
            type: Sequelize.TIME,
            allowNull: true
            //allowNull: false
        },
        start_sleep_time: {
            type: Sequelize.TIME,
            allowNull: true
            //allowNull: false
        },
        end_sleep_time: {
            type: Sequelize.TIME,
            allowNull: true
            //allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true
            //allowNull: false
        }
    }, { timestamps: false });
    return SleepReport;
};


