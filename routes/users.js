//void function () {
	'use strict';

	module.exports = function (context) {

		const router = require('express').Router();
		const UserData = require('../data/user-data');

		/* GET users listing. */
		router.get('/', function routeUsersGet(req, res, next) {
			res.json(UserData.data);
		});

		/* GET user data :id. */
		router.get('/:id', function routeUsersGet(req, res, next) {
			console.log('params:', req.params);
			res.json(UserData.findById(Number(req.params.id)) ||
				{error: 'not found', id: req.params.id});
		});

		return function routeUsers() { return router.apply(this, arguments) };

	};

//} ();
