// <Users />
const Users = React.createClass({
	getInitialState() {
		return {
			users: [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]
		};
	},
	componentDidMount() {
		request.get(location.href + 'users', undefined, {headers: {'x-get-data': true}})
		.then(res => this.setState({users: res.body}));
	},
	render() {
		//console.log('this.state.users:', this.state.users);
		//console.log('typeof this.state.users:', typeof this.state.users);
		//console.log('this.state.users.constructor.name:', this.state.users.constructor.name);
		const users = this.state.users.map(user =>
			<User id={user.id} name={user.name} key={user.id}/>);
		return <div>
				<h3>ユーザー一覧</h3>
				<table border="1">
					<tr><th>id</th><th>code</th><th>name</th></tr>
					{users}
				</table>
			</div>;
	}
});

console.log('typeof module:', typeof module);
window.Users = Users;
