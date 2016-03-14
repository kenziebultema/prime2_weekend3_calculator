var express = require('express');
var router = express.Router();
var path = require('path');

//other end of add ajax call
router.post('/add', function(req, res){
    console.log(req);
    var result = parseFloat(req.body.first) + parseFloat(req.body.second);
    result = toString();
    res.send(result);
});

//other end of subtract ajax call
router.post('/subtract', function(req, res){
    console.log(req);
    var result = parseFloat(req.body.first) - parseFloat(req.body.second);
    result = toString();
    res.send(result);
});

//other end of multiply ajax call
router.post('/multiply', function(req, res){
    console.log(req);
    var result = parseFloat(req.body.first) * parseFloat(req.body.second);
    result = toString();
    res.send(result);
});

//other end of divide ajax call
router.post('/divide', function(req, res){
    console.log(req);
    var result = parseFloat(req.body.first) / parseFloat(req.body.second);
    result = toString();
    res.send(result);
});

module.exports = router;
