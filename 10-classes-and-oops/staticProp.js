class user{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId (){                 // here static keyword restricts the access of this function by its subsequent childs this makes it private 
        return `123`

    }
}

const sam = new user ("Samadhan")
// console.log(sam.createId());          

class Teacher extends user {
    constructor (username, email){
        super(username),
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "iphone@apple.com")
iphone.createId();