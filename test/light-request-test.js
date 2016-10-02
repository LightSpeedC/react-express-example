void function () {
	'use strict';

	const request = require('../public/js/light-request');

	request.get('https://api.github.com/users/LightSpeedC',
		undefined, {headers: {'user-agent': 'test client'}})
	.then(res => console.log(res));

} ();
