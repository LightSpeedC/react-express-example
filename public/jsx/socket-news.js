// <SocketNews socket={socket} />
const SocketNews = React.createClass({
	getInitialState() {
		return {list: []};
	},
	news (data) {
		this.state.list.push(data);
		this.setState({list: this.state.list});
		this.props.socket.emit('my other event', {my: 'data'});
	},
	componentDidMount() {
		this.props.socket.on('news', this.news);
	},
	componentWillUnmount() {
		//this.props.socket.close();
	},
	render() {
		return <div>
				{this.state.list
					.map(JSON.stringify)
					.map(x => <p>{x}</p>)}
			</div>;
	}
});

window.SocketNews = SocketNews;
