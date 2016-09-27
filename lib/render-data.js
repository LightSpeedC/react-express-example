	'use strict';

	module.exports = renderData;

	function renderData(data) {
		return '<table border="1">\n' +
			(data.length > 0 ?
			'<tr>' +
			Object.keys(data[0]).map(x =>
				'<th>' + x + '</th>').join('') +
			'</tr>\n' : '') +
			data.map(renderRow).join('') +
			'</table>';
	}

	renderData.renderRow = renderRow;
	function renderRow(x) {
		return '<tr>' +
				Object.keys(x).map(y =>
					'<td>' + x[y] + '</td>').join('') +
				'</tr>\n';
	}
