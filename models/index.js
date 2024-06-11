'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.post = require("./post.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);
db.test = require("./test.js")(sequelize, Sequelize);
db.medicine = require("./medicine.js")(sequelize, Sequelize);
db.doseReport = require("./dose_report.js")(sequelize, Sequelize);
db.sleepReport = require("./sleep_report.js")(sequelize, Sequelize);
db.exerciseReport = require("./exercise_report.js")(sequelize, Sequelize);
db.diary = require("./diary.js")(sequelize, Sequelize);

/*
 * 모델 간 연관관계 설정
*/

// 사용자 : 테스트 (1:N)
db.user.hasMany(db.test, {foreignKey: 'user_id'});         
db.test.belongsTo(db.user, {foreignKey: 'user_id'});

// 사용자 : 수면기록 (1:N)
db.user.hasMany(db.sleepReport, {foreignKey: 'user_id'});        
db.sleepReport.belongsTo(db.user, {foreignKey: 'user_id'});

// 사용자 : 운동기록 (1:N)
db.user.hasMany(db.exerciseReport, {foreignKey: 'user_id'});     
db.exerciseReport.belongsTo(db.user, {foreignKey: 'user_id'});

// 사용자 : 일기 (1:N)
db.user.hasMany(db.diary, {foreignKey: 'user_id'});              
db.diary.belongsTo(db.user, {foreignKey: 'user_id'});

// 사용자 : 복용기록 (1:N)
db.user.hasMany(db.doseReport, {foreignKey: 'user_id'});         
db.doseReport.belongsTo(db.user, {foreignKey: 'user_id'});

/*
약 : 복용기록 (N:M)
N:M 관계라서 중간 테이블인 medicine_doseReport 테이블이 생성됨
*/
db.medicine.belongsToMany(db.doseReport, { through: 'medicine_doseReport', foreignKey: 'medicine_id'});       
db.doseReport.belongsToMany(db.medicine, { through: 'medicine_doseReport' , foreignKey: 'dose_report_id'});

// 사용자 : 게시글 (1:N)
db.user.hasMany(db.post, {foreignKey: 'user_id'});               
db.post.belongsTo(db.user, {foreignKey: 'user_id'});

// 게시글 : 댓글 (1:N)
db.post.hasMany(db.comment, {foreignKey: 'post_id'});            
db.comment.belongsTo(db.post, {foreignKey: 'post_id'});

// 댓글 : 댓글 (1:N) 자기참조 관계     
db.comment.belongsTo(db.comment, {foreignKey: 'parent_id'});

                               
// db.diary.sync({force:true});



module.exports = db;