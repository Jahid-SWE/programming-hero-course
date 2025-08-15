function multiply (num1,num2){
    if(typeof num2 !== 'number' || typeof num2 !== 'number'){
        return 'please provide  number'
    }
    const mult=num1*num2;
    return mult;
}

const result= multiply(5,9);
console.log(result);