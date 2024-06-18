var express = require('express');
const testPOST = require('../../controllers/test/testPOST');
const testListGET = require('../../controllers/test/testListGET');
const testGET = require('../../controllers/test/testGET');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res)=>{
  res.render('test/test');
});
router.post('/',testPOST)
router.get('/list', testListGET);
router.get('/content', testGET);

router.get('/:testID', async (req, res)=>{
  const testResult = await testGET(req, res);
  res.render('test/testResult',{testResult: testResult});
})
module.exports = router;