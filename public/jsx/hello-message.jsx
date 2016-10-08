// <HelloMessage name={name}/>

import {Component} from 'react';

class HelloMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {name: this.props.name}; // bad!?
	}
	render() {
		return <h2>Hello, {this.state.name}!</h2>;
	}
}

export default HelloMessage;
