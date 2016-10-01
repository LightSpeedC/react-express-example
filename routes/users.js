//void function () {
	'use strict';

	module.exports = function (context) {

		const router = require('express').Router();
		const UserData = require('../data/user-data');
		const renderData = require('../lib/render-data');

		/* GET users listing. */
		router.get('/', function routeUsersGet(req, res, next) {
			if (!req.headers['x-get-data'] &&
				req.headers['user-agent'].includes('Mozilla'))
				return res.send(renderData(UserData.data));
			res.json(UserData.data);
		});

		/* GET user data :id. */
		router.get('/:id', function routeUsersGet(req, res, next) {
			console.log('params:', req.params);

			const data = UserData.findById(Number(req.params.id)) ||
				{error: 'not found', id: req.params.id};

			if (!req.headers['x-get-data'] &&
				req.headers['user-agent'].includes('Mozilla'))
				return res.send(renderData([data]));
			res.json(data);
		});

		return function routeUsers() { return router.apply(this, arguments); };

	};

//} ();
