module.exports = (sequelize, Sequelize) => {
    /*
    test_id: 테스트 ID
    result: 선택지 결과
    test_date: 테스트 일자
    total_score: 총점
    user_id: 회원 ID(FK)

    외래키 필드는 시퀄라이즈가 생성
    */
    const Test = sequelize.define("test", {
        test_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        result: {
            type: Sequelize.STRING,
            allowNull: false
        },
        test_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        total_score: {
            type: Sequelize.INTEGER,
            allowNull: false,
            // check constraint 추가해주어야함
        }
    },

    {timestamps: false},

    );
    return Test;
}