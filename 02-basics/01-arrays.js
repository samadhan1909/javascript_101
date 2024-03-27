const myArr = [0,'samadhan', 2 ,3, 4,5]

// console.log(myArr[1]);

// arrays methods 

// console.log(myArr.push(7));
// console.log(myArr);
// console.log(myArr.pop());

// myArr.unshift(2)
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(15));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof(newArr));

// slice & Splice 

console.log ("A", myArr);

const myn1= myArr.slice(1,3);
console.log("B", myArr);

console.log(myn1);

const myn2= myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);

// slice donot operate on original array it applies on copy but splice manipulates the original array and displays all other elements thtat are excluded in that array 
 