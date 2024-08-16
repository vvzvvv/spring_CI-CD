const express = require('express');
const router = express.Router();
const exerciseGET = require('../../controllers/exercise/exerciseGET');
const exercisePOST = require('../../controllers/exercise/exercisePOST');
const boardUserInfoGET = require('../../controllers/board/boardUserInfoGET');

router.get('/:userID', async (req, res)=>{
    const userID = req.params.userID;
    res.render('board/board',{userID: userID});
  });

router.get('/userinfo/:userID', boardUserInfoGET);
module.exports = router;


