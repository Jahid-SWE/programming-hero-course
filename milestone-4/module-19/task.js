
// task one
function multiply(num1,num2,num3,num4){
    let result= num1*num2*num3*num4;
    console.log(result);
    return result
}

// let numb= multiply(2,4,6,3);
// console.log('The multiply four number result is : ', numb);

multiply(2,3,4,5);


// task 2

function checkNumber(number){
    if(number%2=== 0){
        const result = number/2;
        return result;
    }
    else{
        const result=number*2;
        return result
    }
}

const number= checkNumber(51);
console.log('This number is :', number);