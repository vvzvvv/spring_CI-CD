const express = require("express");
const router = express.Router();

const loginPOST = require("../../controllers/user/loginPOST");
const joinPOST = require("../../controllers/user/joinPOST");
const emailCheckingPOST = require("../../controllers/user/emailCheckingPOST");
const passwordResetLinkPOST = require("../../controllers/user/passwordResetLinkPOST");
const passwordPUT = require("../../controllers/user/passwordPUT");

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

router.post('/password/emailVarificaiton', passwordResetLinkPOST);


/*
비밀번호 변경 관련 라우트
*/
router.get('/password/change', function(req, res) {
  const {token} = req.query;
  console.log('token: ', token);
  
  res.render("user/changePassword", {token});
});

router.put('/password/change', passwordPUT);


module.exports = router;