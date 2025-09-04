const numbers=[9,8,2,7,6,4]

console.log(...numbers);

const marks=[9,8,2,7,6,4]
console.log(Math.max(...marks))
console.log(Math.min(...marks)) 

/** 
const first= [1,9,46,7,5,7];
const second=first
console.log(first)
console.log(second)
*/
const first= [1,9,46,7,5,7];
const second=[25,91,...first]
console.log(first)
console.log(second)