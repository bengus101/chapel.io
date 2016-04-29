var express = require('express');
var db = require('../models');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
	if(!req.currentUser) {
		req.flash('danger', 'You must be logged in to view this page.');
		res.redirect('/');
	} else {
		db.confession.findAll({
			include: [db.user]
		}).then(function(gallery) {
			console.log(gallery);
			res.render('confession', {confession: gallery, alerts: req.flash()});
		});	
	}

});

router.get('/new', function(req, res){
	res.render('confession');
});

router.post('/', function(req, res){
	console.log(req.body);

	db.user.find({
		where: { username: req.currentUser.username}
	}).then(function(user) {
		user.createConfession({
			content: req.body.content
		}).then(function(confession) {
			res.redirect('gallery');
		});
	}).catch(function(err) {
		res.send(err);
	});
});

module.exports = router;