const user = {
    username : "Samadhan",
    price : 999, 

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     console.log(this);
    
// }

// chai()

// const chai= function (){
//     let username = "Samadhan"
//     console.log(this.username)
// }
// chai()

// const chai=  () => {
//     let username = "Samadhan"
//     console.log(this)
// }
// chai()

// const addTwo=  (num1, num2) => {
//    return num1+num2
// }
// console.log(addTwo(4,5));               // this can also be written as 

// const addTwo=  (num1, num2) => num1+num2      // without {} just in one line
// console.log(addTwo(4,5));


// const addTwo = (num1, num2) =>( {username: "Samadhan"})
// console.log(addTwo(4,5));

// myArray = [2, 3, 5, 7, 8]

// myArray.forEach(() => ());            // syntax for arrow function for future use 