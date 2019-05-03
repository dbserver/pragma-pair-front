require('babel-polyfill');

const express = require('express');
const app = express();
const Config = require('./config');
const conf = new Config();

global.__base = __dirname + '/';

app.use(function(req, res, next) {
  	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Authorization, Content-Type");
	next();
});

app.use(express.static('.'));
app.use(express.static('/compiled'));

app.listen(conf.port, function () {
  console.log('Application started on port '+ conf.port);
});
