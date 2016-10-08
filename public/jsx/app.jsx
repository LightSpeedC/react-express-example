// <App />

// Reactをインポート
import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import {Button, Alert, Spinner} from 'elemental';

import HelloMessage from './hello-message.jsx';
import SocketNews from './socket-news.jsx';
import User from './user.jsx';
import Users from './users.jsx';
import Timer from './timer.jsx';

const Header = props => <header>header</header>;

const Main = props => <main>main</main>;

const Footer = props => <footer>footer</footer>;

// コンポーネント
class App extends Component {
	render() {
		return <div>
			<Header />
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
			<Footer />
		</div>;
	}
}

// レンダリング
render(<Router>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById('app'));

// 参考URL
// https://www.willstyle.co.jp/blog/268/ - [入門] React.jsさわってみた。
// http://qiita.com/momunchu/items/dcd95d186ac3b74d1edf - 私のReact用SPA向けgulpfile.js
