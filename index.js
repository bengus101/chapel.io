// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');

// local dependencies
var db = require('./models');

var app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/confession', function(req, res) {
	res.render("confession");
});

app.get('/gallery', function(req, res) {
	res.render('gallery');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/signup', function(req, res) {
	res.render('signup');
});

app.get('/login', function(req, res) {
res.render('login');
});

var port = 3000;
app.listen(port, function() {
	console.log('Port ' + port + ' straight flexin');
});