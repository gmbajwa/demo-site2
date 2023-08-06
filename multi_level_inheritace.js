console.log(' ');
console.log('multi_level_inheritance is working fine........... ');
console.log(' ');
console.log('Multilevel Inheritance in JavaScript: ');
console.log(' ');
const a = {id:1};
const b = {fName: 'fname1'};
b.__proto__ = a;
const c = {userName: 'username1'};
c.__proto__ = b;
const d = {email: 'email1'};
d.__proto__ = c;
const e = {age: 34};
e.__proto__ = d;
const f = Object.create(e);
console.log('f Only P e: ',f);
console.log(' ');
console.log('id at f: ', f.id);
console.log(' ');
console.log('first name at f:  ', f.fName);
console.log(' ');
console.log('user name at f: ', f.userName);
console.log(' ');
console.log('email at f:  ', f.email);
console.log(' ');
console.log('age at f: ', f.age);
console.log(' ');
console.log('Only Create Empty Object Using Object.create Method: ');
const user2 = Object.create(null);
console.log(' ');
console.log('user2 object: ', user2);
console.log(' ');
user2.id = 55;
console.log(' ');
console.log('user2 object: ', user2);
console.log(' ');
console.log(' ');
user2.__proto__ = f;
console.log('user2 object: ', user2);
console.log(' ');
