// support browser <script src="">
// support common.js, node.js, browserify: require('');
// support ES5
// do not use ES6 (ES2015) or later

this.ajax = function () {
	'use strict';

	var ajax;
	try { new XMLHttpRequest; ajax = ajaxXHR; }
	catch (e) { ajax = ajaxHTTP; }

	if (typeof module === 'object' && module.exports)
		module.exports = ajax;

	ajax.get    = function (url)       { return ajax('GET',    url); };
	ajax.post   = function (url, data) { return ajax('POST',   url, data); };
	ajax.put    = function (url, data) { return ajax('PUT',    url, data); };
	ajax.delete = function (url, data) { return ajax('DELETE', url, data); };

	return ajax;

	function ajaxXHR(method, url, data) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest;
				xhr.open(method, url);
				xhr.setRequestHeader('X-Get-Data', 'true');
				xhr.onload = function () {
					if (xhr.status == 200) {
						var body = xhr.response;
						try { body = JSON.parse(body); } catch (e) {}
						resolve({body: body});
					}
					else reject(new Error(xhr.statusText));
				}
				xhr.onerror = reject;
				if (typeof data !== 'undefined') {
					xhr.setRequestHeader('Content-Type', 'application/json');
					xhr.send(JSON.stringify(data));
				}
				else xhr.send();
		});
	}

} ();

// http://js-next.hatenablog.com/entry/2013/11/28/093230
// https://ja.wikipedia.org/wiki/XMLHttpRequest
