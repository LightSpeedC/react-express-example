module.exports = function (context) {
	'use strict';

	const router = require('express').Router();
	const UserData = require('../data/user-data');
	const renderData = require('../lib/render-data');

	/* GET users listing. */
	router.get('/', function routeUsersGet(req, res, next) {
		console.log('\x1b[32m' + req.method + ' ' + req.url + '\x1b[m');
		console.log(Object.keys(req.headers).map(x => '  ' + x + ': ' + req.headers[x]).join('\n'));

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
