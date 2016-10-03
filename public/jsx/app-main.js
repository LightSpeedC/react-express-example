// <AppMain/>
const AppMain = React.createClass({
	render() {
		return <div>{this.props.children}</div>;
	}
});

window.AppMain = AppMain;
