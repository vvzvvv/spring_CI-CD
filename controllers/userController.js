const db = require("../models/index"),
    // userService = require("../services/userService"),
    User = db.user,

    getUserParams = body => {
        return {
            email: body.email,
            password: body.password,
            passwordCheck: body.passwordCheck
        };
    };

module.exports = {
    // 로그인 페이지 요청(get)
    login: (req, res) => {
        res.render("users/login");
    },

    // 회원가입 페이지 요청 (get)
    join: (req, res) => {
        res.render("users/join");
    },
    
    // 비밀번호 변경 이메일 인증 페이지 요청 (get)
    emailVerificationView: (req, res) => {
        res.render("users/emailVerification");
    },

    // 비밀번호 변경 페이지 요청 (get)
    changePasswordView: (req, res) => {
        res.render("users/changePassword");
    }
}