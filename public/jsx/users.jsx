// <Users />
import React from 'react';
import User from './user.jsx';

//const Users = React.createClass({
class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [{id: 1, name: 'Foo', code: 'foo'}, {id: 2, name: 'Bar', code: 'bar'}]
		};
	}
	componentDidMount() {
		setTimeout(()=>{
			request.get({headers: {'x-get-data': true}}, location.href + 'users')
			.then(res => this.setState({users: res.body}));
		}, 3000);
	}
	render() {
		//console.log('this.state.users:', this.state.users);
		//console.log('typeof this.state.users:', typeof this.state.users);
		//console.log('this.state.users.constructor.name:', this.state.users.constructor.name);
		const users = this.state.users.map(user =>
			<User {...user} key={user.id}/>);
		return <div>
				<h3>ユーザー一覧</h3>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>code</th>
							<th>name</th>
						</tr>
					</thead>
					<tbody>
						{users}
					</tbody>
				</table>
			</div>;
	}
}
//});

export default Users;
//console.log('typeof module:', typeof module);
//window.Users = Users;
