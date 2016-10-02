void function () {
	'use strict';

	const request = require('../public/js/light-request');

	request.get('https://api.github.com/users/LightSpeedC')
	.then(res => console.log(res));

} ();
