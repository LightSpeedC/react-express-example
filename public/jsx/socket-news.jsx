// <SocketNews socket={socket} />

import {Component} from 'react';

class SocketNews extends Component {
	constructor(props) {
		super(props);
		this.state = {list: [{started: new Date().toString()}]};
		this.news = this.news.bind(this);
	}
	news(data) {
		this.state.list.push(data);
		this.setState({list: this.state.list});
		this.props.socket.emit('my other event', {my: 'data'});
	}
	componentDidMount() {
		this.props.socket.on('news', this.news);
	}
	componentWillUnmount() {
	}
	render() {
		return <div>
				{this.state.list
					.map(JSON.stringify)
					.map((x, i) => <p key={'i' + i}>{x}</p>)}
			</div>;
	}
}

export default SocketNews;
