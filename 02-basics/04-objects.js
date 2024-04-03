// singelton 

// const tinderUser = new Object ()   // this is singelton objeect 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstName: "samadhan",
            lastName: "surwase"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users =[
    {
        id: 1,
        email: "test@google.com"
    },
    {
        id: 1,
        email: "test@google.com"
    },
    {
        id: 1,
        email: "test@google.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to ask if the tinderUser object has osomething of our intrest ie. isLoggedIn property


//8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// De-structuring objects 

const course = {
    coursename: "JS Hindi",
    price: 99, 
    courseInstructor: "HiteshC"
}

// course.courseInstructor
 
const {courseInstructor : constructor}= course
console.log(constructor);

// data from API eg.

// {
//     "name": "Samadhan",
//     "age": 21,
//     "location": "Pune"
// }

// [
//     {},
//     {},
//     {}
// ]
