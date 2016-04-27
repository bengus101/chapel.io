// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var router = express.Router();
var flash = require('connect-flash');

// local dependencies
var db = require('./models');
var confessionCtrl = require('./controllers/confession');
var authCtrl = require('./controllers/auth');

var app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.use(flash());

app.use(session({
  secret: 'dsalkfjasdflkjgdfblknbadiadsnkl',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/confession', function(req, res) {
	res.render("confession");
});

app.post('/gallery', function(req, res) {
	res.render('gallery');
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

app.use('/confession', confessionCtrl);
app.use('/auth', authCtrl);

var port = 3000;
app.listen(port, function() {
	console.log('Port ' + port + ' straight flexin');
});