class User {
  #password;
  
  constructor(firstName, lastName, password){
   this.firstName = firstName;
   this.lastName = lastName;
   this._score = 0;
   this.#password = password;
  }

  //overloading
  login(timeOfDay){
    if(typeof timeOfDay === 'string'){
      console.log(`${this.firstName} just logged in the ${timeOfDay}`);
    } else {
      console.log(this.firstName, 'just logged in');
    }
    return this;
   }

  logout(){
    console.log(this.lastName, 'just logged out');
    return this;
  }

  updateScore(){
    this._score++;
    console.log(this.firstName, 'score is now', this._score);
    return this;
  }

  //Abstract method
  reportAdmin(){
    throw new Error("You must implement reportAdmin method in a subclass");
  }

  #encryptPassword(){
    return `${this.#password}123`;
  }

  getPassword(){
    return this.#encryptPassword();
  }

}

class Admin extends User {
  deleteUser(user){
    users = users.filter(u => {
      return u.firstName != user.firstName;
    })
  }
}

class Employee extends User {
  reportAdmin(admin){
    admins.forEach((ad) => {
     if(admin === ad){
      console.log(admin)
     }
    })
  }
}

const userOne = new User('Mike', 'Horvilleur', 'password1');
const userTwo = new User('Chris', 'Horvilleur', 'password2');
const adminOne = new Admin('Rene', 'Horvilleur', 'password3');
const adminTwo = new Admin('Michelle', "Horvilleur", 'password4');
const employeeOne = new Employee('Nikki', 'Horvilleur', 'password5')

let users = [userOne, userTwo];
let admins = [adminOne, adminTwo];

