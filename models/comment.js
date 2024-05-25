module.exports = (sequelize, Sequelize) => {
    /*
    comment_id: 댓글 ID
    createdAt: 작성 날짜
    contents: 내용
    post_id: 게시글 ID(FK)
    user_id: 회원 ID(FK)
    parent_id: 부모댓글 ID(FK)

    외래키 필드는 시퀄라이즈가 생성
    */
    const Comment = sequelize.define("comment", {
        comment_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },

    {
        /*
        '작성 날짜'를 createdAt 필드로 생성
        */
        timestamps: true
    });
    return Comment;
}