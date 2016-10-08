// <App />

// Reactをインポート
import {Component} from 'react';
import {render} from 'react-dom';

import {Button, Alert, Spinner} from 'elemental';

import HelloMessage from './hello-message.jsx';
import SocketNews from './socket-news.jsx';
import User from './user.jsx';
import Users from './users.jsx';
import Timer from './timer.jsx';

// コンポーネント
class App extends Component {
	render() {
		return <div>
			<h1 key="h1">React.jsのテスト</h1>
			<HelloMessage key="hm" name="React!" />
			<SocketNews key="sn" socket={socket} />
			<Timer />
			<Users />
			{/*<table>
				<User id="111" name="username111" code="usercode111" />
			</table>*/}
			<div>{this.props.children}</div>
			<Button>xx</Button>
		</div>;
	}
}

// レンダリング
render(<App />, document.getElementById('app'));

// 参考URL https://www.willstyle.co.jp/blog/268/
