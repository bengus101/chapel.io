var express = require('express');
var db = require('../models');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
	if(!req.currentUser) {
		req.flash('danger', 'You must be logged in to view this page.');
		res.redirect('/');
	};
});

module.exports = router;