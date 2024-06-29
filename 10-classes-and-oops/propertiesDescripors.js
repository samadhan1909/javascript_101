const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name :"ginger chai",
    price : 250,
    isAvailable: true,

    chaiBani: function(){
        console.log("Nahi chain nahi bani");
    }
}


Object.defineProperty(chai, "price",{
    //writable:false,
    //enumerable: false
})                                           

// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}