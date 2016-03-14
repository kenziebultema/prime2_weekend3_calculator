var express = require('express');
var path = require('path');
var index = require('./routes/index.js');
var math = require('./routes/math');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', math);
app.use('/', index);


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});
