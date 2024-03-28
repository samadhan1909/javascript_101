// singelton 
// constructor : objecat.create

//Object literal 

const mySmb = Symbol("key1")

const jsUser = {
    name: "samadhan",
    "full name": "Samadhan Surwase",
    [mySmb]: "myKey1",
    age: 21,
    location: "pune",
    email: "samadhansurwase@gmail.com",
    isLoggedIn: false,
    loginDays:["Monday", "Tuesday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]); 
// console.log((jsUser[mySmb]));

// if we use string as a key then [] is the only way to 
// acces that key


// Also if we want to use the Symbol (datatype) as a key then to accces it we have to write 
// it inside [] at key position and to access it also use the [] 

// for eg see the symbol is declared in line 6 and write it as mysmb: myKey1,in objecat it will
// show op as myKey1 but datatype would be string and not Symbol so need rto write iit in []

// jsUser.email = "Samadhan@google,com"
// Object.freeze(jsUser)
// jsUser.email = "samadhan@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); // this is used for telling that name from this object still doubted 
} 
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());