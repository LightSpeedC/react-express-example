//void function () {
	'use strict';

	const UserData = require('./user-data');

	const Data = require('./data');

	const DeptData = module.exports = Data.extend({
		constructor: function DeptData(data) {
			Data.call(this, data);
		}
	},
	{
		file: 'dept-file.json',
		data: [],
		add(data) {
			if (DeptData.data.some(x => x.code === data.code))
				throw new Error('same code exists: ' + this.name);

			return Data.add(data);
		},
		remove(data) {
			if (UserData.data.some(x => x.dept_id === data.id))
				throw new Error('user refs this dept: ' + this.name);

			return Data.remove(data);
		}
	});

	try { DeptData.load(); } catch (e) {}

//} ();
