const express = require("express");
const router = express.Router();

const loginPOST = require("../../controllers/user/loginPOST");
const joinPOST = require("../../controllers/user/joinPOST");
const emailCheckingPOST = require("../../controllers/user/emailCheckingPOST");
const findPassword = require("../../controllers/user/findPassword");
const changePassword = require("../../controllers/user/changePassword");

/*
로그인 관련 라우트
*/
router.get('/login', function(req, res, next) {
  res.render('user/login');
});

router.post('/login', loginPOST);


/*
회원가입 관련 라우트
*/
router.get('/join', function(req, res) {
  res.render("user/join");
});

router.post('/join', joinPOST);
router.post('/join/emailChecking', emailCheckingPOST);




/*
이메일 인증 관련 라우트
*/
router.get('/emailVerification', function(req, res) {
  res.render("user/emailVerification");
});

router.post('/password/emailVarificaiton', findPassword);


/*
비밀번호 변경 관련 라우트
*/
router.get('/password/change', function(req, res) {
  res.render("user/changePassword");
});

router.post('/password/change',changePassword);


module.exports = router;