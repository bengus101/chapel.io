var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/logout', function(req, res) {
	req.currentUser = false;
	res.locals.currentUser = false;
	res.redirect('/');
});

router.post('/signin', function(req, res) {
	// providing we get the username and password
	var user = req.body.username;
	var pass = req.body.password;
	db.user.authenticate(user, pass, function(err, user) {
		// user successfully logged in
		if (user) {
			req.session.userId = user.id;
			req.flash('success', 'Successfully Signed In');
			res.redirect('/gallery');
		}
	});
});

router.get('/signup', function(req, res) {
	res.render('signup' {alerts: req.flash()});
});

router.post('/signup', function(req, res) {
	db.user.findOrCreate({
		where: {
			username: req.body.username
		},
		defaults: {
			password: req.body.password
		}
	}).spread(function(user, isNew) {
		if (isNew) {
    	res.redirect('/tweets');
  	} else {
  		req.flash('danger', 'This username already taken. Please choose a different one.')
    	res.redirect('/auth/signup');
  	}
	}).catch(function(err) {
	    req.flash('danger', err.message);
	    res.redirect('/auth/signup')
	});
});

module.exports = router;