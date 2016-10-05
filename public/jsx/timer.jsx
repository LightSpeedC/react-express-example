// <Timer interval={1000} />
const Timer = React.createClass({
	getInitialState() {
		this.interval = this.props.interval || 1000;
		return {counter: 0};
	},
	tick() {
		this.setState({counter: this.state.counter + 1});
		//console.log('update:', this.props.update);
		if (this.props.update)
			this.props.update.setState({name: 'React ' + this.state.counter});
		//else console.log('update null');
	},
	componentDidMount() {
		this.timer = setInterval(this.tick, this.interval);
	},
	componentWillUnmount() {
		clearInterval(this.timer);
	},
	render() {
		return <div>Count: {this.state.counter}</div>;
	}
});

window.Timer = Timer;
