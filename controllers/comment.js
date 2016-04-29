var express = require('express');
var db = require('../models');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
	if(!req.currentUser) {
		req.flash('danger', 'You must be logged in to view this page.');
		res.redirect('/');
	}
console.log('Are we here?');

// 	db.comment.findAll({
// 		include: [db.user]
// 	}).then(function(gallery) {
// 		console.log(confession);
// 		res.render('/gallery', {gallery: gallery, alerts: req.flash()});
// 	});
});

module.exports = router;