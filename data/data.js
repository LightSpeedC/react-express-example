//void function () {
	'use strict';

	const fs = require('fs');
	const path = require('path');
	const merge = require('merge-light');
	const extend = require('extend-light');

	const Data = module.exports = extend({
		constructor: function Data(data) {
			this.id = 0;
			const ctor = this.constructor;
			merge(this, data);
			this.id = data.id || ++ctor.max_id;
		},
		add() { return this.constructor.add(this); },
		remove() { return this.constructor.remove(this); },
		save() { return this.constructor.save(); }
	},
	{
		file: 'data.json',
		data: [],
		add(data) {
			if (this.data.some(x =>
					x.id === data.id))
				throw new Error('same id exists: ' + this.name);

			this.data.push(data);
			return data;
		},
		remove(data) {
			if (!this.data.some(x =>
					x.id === data.id))
				throw new Error('id does not exist: ' + this.name);

			this.data = this.data.filter(x => x.id !== data.id);
			return data;
		},
		findById(id) {
			let data;
			this.data.some(x => x.id === id ? (data = x, true): false);
			return data;
		},
		load() {
			const ctor = this;
			ctor.data =
				JSON.parse(fs.readFileSync(
					path.join(__dirname, ctor.file)
				).toString())
				.map(x => new (ctor)(x));
			ctor.max_id = ctor.data
					.reduce((x, y) => Math.max(x, y.id), 0);
		},
		save() {
			const ctor = this;
			const file = path.join(__dirname, ctor.file);

			fs.writeFileSync(file + '.new',
				JSON.stringify(ctor.data, null, '\t'));
			try { fs.unlinkSync(file + '-2.log'); } catch (e) {}
			try { fs.renameSync(file + '-1.log', file + '-2.log'); } catch (e) {}
			try { fs.renameSync(file,            file + '-1.log'); } catch (e) {}
			fs.renameSync(file + '.new', file);
		}
	});

//} ();
