//void function () {
	'use strict';

	const Data = require('./data');

	const UserData = module.exports = Data.extend({
		constructor: function UserData(data) {
			Data.call(this, data);
		}
	},
	{
		file: 'user-file.json',
		data: [],
	});

	try { UserData.load(); } catch (e) {}

//} ();
