// <Timer interval={1000} />
import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.interval = props.interval || 1000;
		this.state = {counter: 0};
		this.tick = this.tick.bind(this);
	}
	tick() {
		this.setState({counter: this.state.counter + 1});
	}
	componentDidMount() {
		this.timer = setInterval(this.tick, this.interval);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return <h3>Count: {this.state.counter}</h3>;
	}
}

export default Timer;
