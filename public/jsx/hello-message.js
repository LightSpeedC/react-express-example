// <HelloMessage name={name}/>
const HelloMessage = React.createClass({
	getInitialState() {
		return {name: this.props.name}; // bad!?
	},
	render() {
		return <h2>Hello, {this.state.name}!</h2>;
	}
});

if (typeof module === 'object')
	module.exports = HelloMessage;
window.HelloMessage = HelloMessage;
