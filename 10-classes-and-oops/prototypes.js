// let myName = "samadhan    "
// let channel = "DefenceDecode     "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]
 
let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.samadhan= function (){
    console.log('Samadhan is present in all objects');
}
// heroPower ()
Array.prototype.hiSam = function(){
    console.log(`Sam says hello`);
}
myHeros.samadhan()

myHeros.hiSam()
// heroPower.hiSam()       // this is due to heropower doesnot hava access of hiSam as it is out of the scope




//*************************Inheritance****************************** */

const teacher = {
    makingVideos: 'true'
}

const user= {
    username : 'Samadhan',
    isLoggedIn: 'true'
}

const teachingAssistant = {
    isAvalilable: 'false'
}
const taSupport = {
    makeAssignment : "javaScript assignments",
    isFullTime : 'false',
    __proto__: teachingAssistant
}

teacher.__proto__ = user


// Modern Syntax 
Object.setPrototypeOf(teachingAssistant, teacher)

let anotherUsername = "Samadhan      "

String.prototype.trueLength= function (){
    console.log(this);

    console.log(`True length of a string is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"samadhan".trueLength()
"Sam".trueLength()