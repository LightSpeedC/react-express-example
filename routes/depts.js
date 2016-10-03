module.exports = function (context) {
	'use strict';

	const router = require('express').Router();
	const DeptData = require('../data/dept-data');
	const renderData = require('../lib/render-data');

	/* GET depts listing. */
	router.get('/', function routeDeptsGet(req, res, next) {
		if (!req.headers['x-get-data'] &&
			req.headers['user-agent'].includes('Mozilla'))
			return res.send(renderData(DeptData.data));
		res.json(DeptData.data);
	});

	/* GET dept data :id. */
	router.get('/:id', function routeDeptsGet(req, res, next) {
		console.log('params:', req.params);

		const data = DeptData.findById(Number(req.params.id)) ||
			{error: 'not found', id: req.params.id};

		if (!req.headers['x-get-data'] &&
			req.headers['user-agent'].includes('Mozilla'))
			return res.send(renderData([data]));
		res.json(data);
	});

	return function routeDepts() { return router.apply(this, arguments); };
};
