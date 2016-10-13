// <App />

// Reactをインポート
//import {Component} from 'react';
const Component = require('react').Component;
//import {render} from 'react-dom';
const render = require('react-dom').render;
//import {Router, Route} from 'react-router';
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

/*
//import {Button, Alert, Spinner} from 'elemental';
const Alert = require('elemental').Alert;
const Button = require('elemental').Button;
const Spinner = require('elemental').Spinner;
*/

//import HelloMessage from './hello-message.jsx';
const HelloMessage = require('./hello-message.jsx');
//import SocketNews from './socket-news.jsx';
const SocketNews = require('./socket-news.jsx');
//import User from './user.jsx';
const User = require('./user.jsx');
//import Users from './users.jsx';
const Users = require('./users.jsx');
//import Timer from './timer.jsx';
const Timer = require('./timer.jsx');

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
			{/*<Button>xx</Button>*/}
			<Footer />
		</div>;
	}
}

// レンダリング
render(<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById('app'));

// 参考URL
// https://www.willstyle.co.jp/blog/268/ - [入門] React.jsさわってみた。
// http://qiita.com/momunchu/items/dcd95d186ac3b74d1edf - 私のReact用SPA向けgulpfile.js
