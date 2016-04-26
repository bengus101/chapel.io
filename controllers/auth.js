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