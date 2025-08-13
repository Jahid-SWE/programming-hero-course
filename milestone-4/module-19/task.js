
// task one
/*
function multiply(num1,num2,num3,num4){
    let result= num1*num2*num3*num4;
    console.log(result);
    return result
}

// let numb= multiply(2,4,6,3);
// console.log('The multiply four number result is : ', numb);

multiply(2,3,4,5);
*/


// task 2
/*
function checkNumber(number){
    if(number%2=== 1){
        const result = number*2;
        return result;
    }
    else{
        const result=number/2;
        return result
    }
}

const number= checkNumber(10);
console.log( number);
*/

// task 3

function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        sum= sum+number;
    }
    let result = sum/numbers.length;
    return result.toFixed(2);
    
}
const numbers= make_avg([10,90,70]);
console.log(numbers);

// task 4

function countZero(str){
    let count= 0;
    for(let i =0 ;i<str.length; i++){
        if(str[i]==='0'){
            count++;
        }
    }
    return count;
    

}
let str= countZero('0110001010');
console.log(str);



// task 5

function odd_even(number){
    if(number%2===0){
        return 'Even';
    }
    else{
        return 'Odd'
    }

}
const number = odd_even(13);
console.log(number)
