var express = require('express');
var router = express.Router();

/* 加法 */
router.get('/', function(req, res, next) {
    
    res.status(200).json('hh');
});

module.exports = router;
