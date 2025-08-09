// var number = [1,9,2,7,6,5];
// number.sort()
// console.log(number);

// let friends = ['jahid','kamal', 'abdul hakim', 'rose', 'tushar'];
// friends.sort();
// console.log(friends)



// let numbers= [9,1,8,3,7,6,2,4];
// numbers.sort();
// console.log(numbers);


// let fruits = ['kahaf', 'jakal','apple', 'aamimona', 'tuktu'];
// fruits.sort();
// console.log(fruits);

// var number = [9,1,8,3,7,4,2];
// number.sort();
// console.log(number);

let products = ['kalma','andab', 'plio', 'star','lalk']
products.sort();
console.log(products);



/**
 * sort Ascending
let age=[13,91,76,81,37,24,13];
let ageSort= age.sort(function(a,b){return a-b})
console.log(ageSort);
 */


let age=[13,91,76,81,37,24,13];


let ageSort= age.sort(function(a,b){return b-a});
console.log(ageSort);

let ascAgeSort= age.sort(function(a,b){return b-a});
console.log(ascAgeSort);


let dscAgeSort= age.sort(function(a,b){return b-a});
console.log(ascAgeSort);