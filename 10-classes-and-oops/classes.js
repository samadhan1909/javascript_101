// valid only after ES6

// class user {
//     constructor(username, email, password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }
    
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     capitalizeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user ("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.capitalizeUsername());

// this is same as above but without class 

function user (username, email, password){
    this.username= username,
    this.email = email,
    this.password = password
   
}

user.prototype.encryptPassword= function (){
    return `${this.password}abc`
}

user.prototype.capitalizeUsername =function(){
    return `${this.username.toUpperCase()}`
}
const tea = new user ("tea", "tea@gamil.com", "123")
console.log(tea.encryptPassword());
console.log(tea.capitalizeUsername());