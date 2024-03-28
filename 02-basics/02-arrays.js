const marvel_heros = ["hulk", "thor", "IronMan"]
const dc_heros= ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const crazy_array = [1,2,3,[2,4],5,[3,4,[3,7]]]
// const decent_array =crazy_array.flat(Infinity)
// console.log(decent_array);

console.log(Array.isArray("Samadhan"));
console.log(Array.from("Samadhan"));
console.log(Array.from({name: "Samadhan"}));  // we have to mention from what array is to be formed or either it will return empty array if it isnt able to convert into array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));
