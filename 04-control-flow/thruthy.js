 const userEmail = []

// if (userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Dont have user email");
// }

// Falsy Values 

// False, 0, -0, BigInt 0n, "", null, undefined, NaN

// Thruthy values 
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length ===0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}


//Nullish Coalescing Operator (??): null undefined 

let val1;
// val1= 5 ?? 10
// val1= 5 ?? null
// val1 = null ?? 5
// val1 = undefined ?? 5 
val1 = null ?? 10 ?? 20

console.log(val1);



// Terniary Operetor
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80") 