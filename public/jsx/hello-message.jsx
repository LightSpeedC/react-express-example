// <HelloMessage name={name}/>

//import {Component} from 'react';
const Component = require('react').Component;

class HelloMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {name: this.props.name}; // bad!?
	}
	render() {
		return <h2>Hello, {this.state.name}!</h2>;
	}
}

//export default HelloMessage;
module.exports = HelloMessage;
