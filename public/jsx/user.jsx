// <User id={} code={} name={} />
//const User = props => <div>{props.id}:{props.code}:{props.name}</div>;
const User = props => <tr><td>{props.id}</td><td>{props.code}</td><td>{props.name}</td></tr>;
User.defaultProps = {id:0, code:'', name:''};
//User.propTypes = {};

export default User;
//window.User = User;
