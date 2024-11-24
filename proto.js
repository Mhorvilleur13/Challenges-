function User(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.online = false;
}

User.prototype.login = function(){
  this.online = true;
  console.log(this.firstName, 'has logged in');
}

User.prototype.logout = function(){
  this.online = false;
  console.log(this.firstName, 'has logged out');
}

function Admin(...args){
  User.apply(this, args)
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
  users = users.filter(user => {
    return  user.firstName != u.firstName;
  })
}

const userOne = new User('Mike', 'Horvilleur');
const userTwo = new User('Chris', 'Horvilleur');
const admin = new Admin('Rene', 'Horvilleur');

let users = [userOne, userTwo, admin];



