function sayMyName (){
   console.log("S");
   console.log("A");   
   console.log("M");   
   console.log("A");   
   console.log("D");   
   console.log("H");   
   console.log("A");
   console.log("N");   
}

// sayMyName()

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(1,3)
// console.log("result :", result);


function addTwoNumbers (number1, number2) {
    // let result = number1 + number2
    // return result
    return  number1 + number2
}
const result = addTwoNumbers(1,3)
// console.log("result :", result);


function logInUserMessage (username){       // username = "User5897" can be used to initalize the value if user donont enter the vaule it will be set as default and can be overwrittten 
    if(!username ){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage());



function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400));  

const user = {
    username: "Samadhan",
    price:999
}

function handleAnyObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleAnyObject(user)
handleAnyObject({
    username: "Sam",
    price: 899
}) 

const newArray = [100,200, 300, 400,600]

function ReturnSecondValue (getArray){
    return getArray[1]
}

// console.log(ReturnSecondValue(newArray));
console.log(ReturnSecondValue([100,1000,2500]));