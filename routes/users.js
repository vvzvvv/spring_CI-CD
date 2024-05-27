const express = require("express"),
  app = express(),
  userController = require("../controllers/userController.js"),
  router = express.Router();


/*
로그인 관련 라우트
*/
router.get('/login', userController.login);     // 요청 url: localhost:3000/users/login




/*
회원가입 관련 라우트
*/
router.get('/join', userController.join);     // 요청 url: localhost:3000/users/join

//router.post('/join', userController.create, userController.redirectView);





/*
비밀번호 변경 관련 라우트
*/
router.get('/password/emailVerification', userController.emailVerificationView);    // 요청 url: localhost:3000/users/password/emailVerification

router.get('/password/change', userController.changePasswordView);    // 요청 url: localhost:3000/users/password/change

//router.post('/password/emailVarificaiton', userController.changePassword);
//router.post('/password/chagne', userController.changePassword);




module.exports = router;