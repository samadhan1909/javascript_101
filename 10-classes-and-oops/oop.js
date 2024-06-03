const user = {
    username: "Samadhan",
    loginCount: 8, 
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got details from database");
        console.log(`Username: ${this.username}`);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

 // Constructor function  new
 //const promiseOne = new Promise ()

 function User (username, loginCount, isLoggedIn){
    this.username = username ;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }
    return this 
 }

 const userOne = new User('Samadhan', 11, true)
 const userTwo = new User("JavaScript", 12, false)
 console.log(userOne.constructor);              // this gives reference to self 
 console.log(userTwo);

 // new always creates an new empty object  
 // 2 cionstructor function is called 
 // 3 instances are added to this 
 // 4 Response is generated 