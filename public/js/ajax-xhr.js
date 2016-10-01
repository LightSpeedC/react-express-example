// http://js-next.hatenablog.com/entry/2013/11/28/093230
// https://ja.wikipedia.org/wiki/XMLHttpRequest

function ajax(method, url, data) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest;
		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(data));
		xhr.onload = function () {
			if (xhr.status == 200) resolve(xhr.response);
			else reject(new Error(xhr.statusText));
		}
		xhr.onerror = reject;
		xhr.send();
	});
}

ajax.get = function (url) { return ajax('GET', url); };
ajax.post = function (url, data) { return ajax('POST', url, data); };
