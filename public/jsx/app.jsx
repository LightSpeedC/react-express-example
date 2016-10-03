// https://www.willstyle.co.jp/blog/268/
//#common/js/jsx/app.jsx
// Reactをインポート
import React from 'react';
import ReactDOM from 'react-dom';

import { Button, Alert, Spinner } from 'elemental';

import HelloMessage from './hello-message';

// コンポーネント
class Test extends React.Component {
	render() {
		return <div>
			<h1>React.jsのテスト</h1>
			<HelloMessage name="React!" />
			<Button>xx</Button>
		</div>;
	}
}

// レンダリング
//ReactDOM.render(<HelloMessage name="React!" />,
//	document.getElementById('app'));
ReactDOM.render(<Test />,
	document.getElementById('app'));
