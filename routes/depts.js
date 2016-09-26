//void function () {
	'use strict';

	module.exports = function (context) {

		const router = require('express').Router();
		const DeptData = require('../data/dept-data');

		/* GET depts listing. */
		router.get('/', function routeDeptsGet(req, res, next) {
			res.json(DeptData.data);
		});

		/* GET dept data :id. */
		router.get('/:id', function routeDeptsGet(req, res, next) {
			console.log('params:', req.params);
			res.json(DeptData.findById(Number(req.params.id)) ||
				{error: 'not found', id: req.params.id});
		});

		return function routeDepts() { return router.apply(this, arguments) };

	};

//} ();
