function SetUsername(username){
    // complex calculation 
    this.username = username
    console.log("called");
}

function createUser (username, email, password){
    SetUsername.call(this, username)                            /* here without .call setUsername is only called and as the function ran successfully it deletes from stack .call explicitly call  to run the function and 
                                                                  this provides the context in which it has to store its value as its own this will delete in a short while it privides current context and provides its content to the caller function */
    this.email= email
    this.password = password 
}

const chai = new createUser ('chai', 'chai@fb.com', '123')

console.log(chai);