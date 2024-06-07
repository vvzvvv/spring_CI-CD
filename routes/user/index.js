const express = require("express");
const router = express.Router();

const loginPOST = require("../../controllers/user/loginPOST");
const joinPOST = require("../../controllers/user/joinPOST");
const emailCheckingPOST = require("../../controllers/user/emailCheckingPOST");

/*
로그인 관련 라우트  요청 url: localhost:3000/users/login
*/
router.get('/login', function(req, res, next) {
  res.render('user/login');
});

router.post('/login', loginPOST);


/*
회원가입 관련 라우트  요청 url: localhost:3000/users/join
*/
router.get('/join', function(req, res) {
  res.render("user/join");
});

router.post('/join', joinPOST);
router.post('/join/emailChecking', emailCheckingPOST);




/*
비밀번호 변경 관련 라우트
*/
//router.get('/password/emailVerification', userController.emailVerificationView);    // 요청 url: localhost:3000/users/password/emailVerification

//router.get('/password/change', userController.changePasswordView);    // 요청 url: localhost:3000/users/password/change

//router.post('/password/emailVarificaiton', userController.changePassword);
//router.post('/password/chagne', userController.changePassword);




module.exports = router;