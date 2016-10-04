// https://www.willstyle.co.jp/blog/268/
//#common/js/jsx/app.jsx
// Reactをインポート
import React from 'react';
import ReactDOM from 'react-dom';

import {Button, Alert, Spinner} from 'elemental';

import HelloMessage from './hello-message.jsx';
import SocketNews from './socket-news.jsx';
import User from './user.jsx';
import Users from './users.jsx';

// コンポーネント
class Test extends React.Component {
	render() {
		return <div>
			<h1 key="h1">React.jsのテスト</h1>
			<HelloMessage key="hm" name="React!" />
			<SocketNews key="sn" socket={socket} />
			<Users />
			{/*<table>
				<User id="111" name="username111" code="usercode111" />
			</table>*/}
			<Button>xx</Button>
		</div>;
	}
}

// レンダリング
ReactDOM.render(<Test />,
	document.getElementById('app'));
