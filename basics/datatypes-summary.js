// # Datatypes 

// 7 types - Strings : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let useremail;  // undefiend

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

// const bigNumber = 21414923846928649873645n

// Reference (Non Primitive): Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "samadhan", 
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);


// *************************************************** Memory *********************************************

// stack(primitive) , Heap(Non Primitive)

let myName = "Samadhan"
let anotherName = myName
anotherName = "Sama"

console.log(myName);
console.log(anotherName);

// non Primitive passes value by reference 

let userOne ={
    email: "user@gmail.com",
    upi: "user@oksbi"
}

let userTwo = userOne
userTwo.email = "samadhan@google.com"

console.log(userOne.email);
console.log(userTwo.email);