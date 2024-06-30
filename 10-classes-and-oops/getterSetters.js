class User {
    constructor(username, email, password){
        this.username = username,
        this.email= email,
        this.password  = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }
    get password (){
        return  `${this._password}Samadhan`
    }
    set password(value){
        this._password = value
    }

}

const sam = new User("sam", "sam@gamil.com", "abc")

console.log(sam.email)


