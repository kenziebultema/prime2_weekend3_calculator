var express = require('express');
var router = express.Router();
var path = require('path');

//other end of add ajax call
router.post('/add', function(req, res){
    // console.log(req.body);
    var result = {};
    result.sum = parseFloat(req.body.first) + parseFloat(req.body.second);
    console.log(result);
    res.send(result);
});

//other end of subtract ajax call
router.post('/subtract', function(req, res){
    console.log(req);
    var result = {};
    result.diff = parseFloat(req.body.first) - parseFloat(req.body.second);
    res.send(result);
});

//other end of multiply ajax call
router.post('/multiply', function(req, res){
    console.log(req);
    var result = {};
    result.prod = parseFloat(req.body.first) * parseFloat(req.body.second);
    res.send(result);
});

//other end of divide ajax call
router.post('/divide', function(req, res){
    console.log(req);
    var result = {};
    result.div = parseFloat(req.body.first) / parseFloat(req.body.second);
    res.send(result);
});

module.exports = router;
