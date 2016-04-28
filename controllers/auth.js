var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/logout', function(req, res) {
  req.session.userId = false;
  console.log(req.session);
  req.flash('success', 'Successfully Logged Out');
  res.redirect('/');
});

router.post('/login', function(req, res) {
	// providing we get the username and password
	var user = req.body.username;
	var pass = req.body.password;
	db.user.authenticate(user, pass, function(err, user) {
		// user successfully logged in
		if (user) {
			req.session.userId = user.id;
			req.flash('success', 'Successfully Signed In');
			res.redirect('/');
		} else {
			console.log(err);
		}
	});
});

router.get('/signup', function(req, res) {
	res.render('signup', {alerts: req.flash()});
});

router.post('/signup', function(req, res) {
	db.user.findOrCreate({
		where: {
			userName: req.body.username
		},
		defaults: {
			password: req.body.password,
			email: req.body.email
		}
	}).spread(function(user, isNew) {
		if (isNew) {
    	res.redirect('/gallery');
  	} else {
  		req.flash('danger', 'This username already taken. Please choose a different one.')
    	res.redirect('/signup');
  	}
	}).catch(function(err) {
		console.log(err);
	    req.flash('danger', err.message);
	    res.redirect('/signup')
	});
});

module.exports = router;