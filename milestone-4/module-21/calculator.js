function add(num1,num2){
    const sum= num1+num2;
    return sum;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divided(num1, num2){
    return num1/num2;
}

function calculator(a,b, operation){
    if(operation==='add'){
        const result =add(a,b);
        return result;
    }
    else if(operation==="subtract"){
        const result = subtract(a,b);
        return result
    }
    else if(operation==="multiply"){
        const result = multiply(a,b);
        return result;
    }
    else if(operation==="divided"){
        const result = divided(a,b);
        return result;
    }
    else{
        return "only allw 'add', 'subtractio', 'multiply','divided' "
    }
}

const result = calculator(14,7,'divided')
console.log(result);