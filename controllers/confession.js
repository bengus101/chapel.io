var express = require('express');
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
	if(!req.currentUser) {
		req.flash('danger', 'You must be logged in to view this page.');
		res.redirect('/');
	}


	db.confession.findAll({
		include: [db.user]
	}).then(function(gallery) {
		console.log(confession);
		res.render('/gallery', {gallery: gallery, alerts: req.flash()});
	});
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
			res.redirect('/gallery');
		});
	}).catch(function(err) {
		res.send(err);
	});
});

// router.get('/gallery', function(req, res) {
// 	db.confession.findAll({
// 		include: [db.user]
// 	}).then(function(gallery) {
// 		console.log(confession);
// 		res.render('/gallery', {gallery: gallery, alerts: req.flash()});
// 	});
// });

module.exports = router;