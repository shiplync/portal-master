var express = require('express');
var morgan = require('morgan');
var compression = require('compression')

var app = express();

app.use(compression());
app.use(morgan('dev'));
// this is in milliseconds, because javascript -_-
var oneDay = 86400000;
app.use(express.static('' + __dirname + '/dist', { maxAge: oneDay })); 
app.listen(process.env.PORT || 3000);
