var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log('Given Credentials : ' + JSON.stringify(req.body));
    res.send('in login page');
});

module.exports = router;