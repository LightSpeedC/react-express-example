// <HelloMessage name={name}/>
import React from 'react';

class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: this.props.name}; // bad!?
	}
	render() {
		return <h2>Hello, {this.state.name}!</h2>;
	}
}

export default HelloMessage;
//if (typeof module === 'object') module.exports = HelloMessage;
//window.HelloMessage = HelloMessage;
