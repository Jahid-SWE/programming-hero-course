// task 1
// function sum(input1,input2){

//     let result = input1+input2;
//     // console.log(result);
//     return result;
// }



// function multiply(input1,input2){
//     let result = input1*input2;
//     // console.log(result);
//     return result;

// }

// let a= 4;
// let b=5;

// let result = sum(a,b)+multiply(a,b);
// console.log(result);


// task 2 


// function sumOfArray(arr){
//     let sum = 0;

//     if(Array.isArray(arr)=== false){
//         return 'Invalid';
//     }

//     for(let num of arr){
//         if(typeof num !== "number"){
//             return "Invalid"
//         }
//         sum = sum+num;

//     }

//     return sum;
// }

// let result = sumOfArray([1,2,"ekash",3]);
// console.log(result);


// task 3

function countVowels(){
    let count = 0;
    for (let i= 0 ; i<str.length; i++){
        if(
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' || 
            str[i] === 'o' || 
            str[i] === 'u'){
            return count;
            }
        }
}
let result = countVowels('data');
console.log(result)



// task 