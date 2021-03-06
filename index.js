// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var router = express.Router();
var flash = require('connect-flash');
var request = require('request');

// local dependencies
var db = require('./models');
var confessionCtrl = require('./controllers/confession');
var authCtrl = require('./controllers/auth');
var commentCtrl = require('./controllers/comment');

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

app.use(function(req, res, next) {
  if (req.session.userId) {
    db.user.findById(req.session.userId).then(function(user) {
      req.currentUser = user;
      res.locals.currentUser = user;
      next();
    });
  } else {
    req.currentUser = false;
    res.locals.currentUser = false;
    next();
  }
});

app.get('/', function(req, res) {
  res.render('index', {alerts: req.flash()});
});

// app.get('/confession', function(req, res) {
// 	res.render("confession");
// });

app.post('/gallery', function(req, res) {
	db.confession.create({content: req.body.confession}).then(function(confession, err) {
		console.log(err);
		console.log(confession);
		res.render('gallery', {confession: confession});
	});
});

app.get('/gallery', function(req, res) {
	db.confession.findAll({
		include: [db.user]
	}).then(function(gallery) {
		res.render('show-all', {confessions: gallery, alerts: req.flash()});
	});
});

app.get('/confession/:id', function(req, res) {
	db.confession.findOne({where: {id: req.params.id}}).then(function(confession) {
		res.render('show-confession', {confession: confession});
	});
});

app.get('/about', function(req, res) {
	res.render('about', {alerts: req.flash()});
});

app.get('/signup', function(req, res) {
	res.render('signup', {alerts: req.flash()});
});

app.get('/login', function(req, res) {
	res.render('login', {alerts: req.flash()});
});

app.use('/confession', confessionCtrl);
app.use('/auth', authCtrl);
app.use('/comment', commentCtrl);

var port = 3000;
app.listen(process.env.PORT || 3000)