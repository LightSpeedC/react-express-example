const UserData = require('./user-data');
const DeptData = require('./dept-data');

console.log(UserData.data);

new UserData({
	code: "x" + (UserData.max_id + 1),
	name: "X" + (UserData.max_id + 1),
	desc: "xxx" + (UserData.max_id + 1),
	dept_id: 20000,
	pwd: "***"
}).add();
console.log(UserData.data);
UserData.save();

console.log(DeptData.data);
new DeptData({
	code: "y" + (DeptData.max_id + 1),
	name: "Y" + (DeptData.max_id + 1),
	desc: "yyy" + (DeptData.max_id + 1),
	roles: []
}).add();
console.log(DeptData.data);
DeptData.save();
