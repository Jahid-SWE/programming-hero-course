

function oddAverage(numbers){
 let oddNumbers =[];
 for ( number of  numbers){
    console.log(number);
    if(number%2===1){
        oddNumbers.push(number);
    }
 }
//  console.log(oddNumbers);
let sum = 0;
for(let number of oddNumbers){
    sum= sum+ number;
}
let count = oddNumbers.length;
const average = sum/count;
// console.log(sum,count)
return sum;
}
const numbers = oddAverage([1,3,2,4,5,6,7,8,13])
console.log(numbers);
