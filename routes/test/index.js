var express = require('express');
const testPOST = require('../../controllers/test/testPOST');
const testListGET = require('../../controllers/test/testListGET');
const testGET = require('../../controllers/test/testGET');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=>{
  const testList = await testListGET();
  res.render('test/test',{testList: testList});
});
router.post('/',testPOST)
router.get('/:testID', async (req, res)=>{
  const testList = await testListGET();
  const testResult = await testGET(req, res);
  res.render('test/testResult',{testList: testList, testResult: testResult});
})
module.exports = router;