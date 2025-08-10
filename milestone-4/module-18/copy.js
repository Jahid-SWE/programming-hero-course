
//  primitive data 
/**
 * let price =25;
let compPrice =price;
console.log(price);
compPrice= 20;
console.log(compPrice);

 */

// non-primitive data kuje arrat object
/**
 * const marks =[20,28,64,87,74,75]
const comMarks = marks;

comMarks[1]=50;
console.log(marks);
console.log(comMarks);
 */


// fokira system copy korar akta array theike arak ta array te

/**
 * let carSpeeds =[60,64,84,27,54,90];
let bmdCarSpeed =[];

for(let carSpeed of carSpeeds){
    bmdCarSpeed.push(carSpeed);
}

carSpeeds[1]=100;
bmdCarSpeed[0]=110;
console.log(carSpeeds);
console.log(bmdCarSpeed);
 */



//Short cut array copy system using Array.from()

/**
 * const numbers = [1,2,3,4];
const newNumbers= Array.from(numbers);
numbers.push(189)
console.log(numbers);
console.log(newNumbers);
 */


// short cut using new array concat()
/**
 * const numbers=  [1,2,3,4];
const newNumbers=[].concat(numbers);

newNumbers.push(15)
console.log(numbers);
console.log(newNumbers);
 */


//  ... dot diye number change kora 
const numbers =[1,2,3,4];
const newNumbers =[...numbers];

newNumbers.push(80);
console.log(numbers)
console.log(newNumbers)

