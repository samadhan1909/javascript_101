// scope of functions 
a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner :", a)
}


// console.log(a);
// console.log(b);
// console.log(c);     // var has a global scope 

function one (){
    const username = "Samadhan"

    function two (){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one ()

if (true){
    const username = "Samadhan"
    if (username === "Samadhan"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log (username);


// ********************** Interesting ************************

console.log(addOne(5));

function addOne (num1){
    return num1 + 1
}


const addTwo = function (num2){
    return num2 +2
}
addTwo(5)