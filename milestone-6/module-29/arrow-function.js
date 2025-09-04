
// Function decleration general use
function add(num1,num2){
    return num1+num2
}
const gm= add(20,30);
console.log(gm);

// function expression 

const subtraction = function(num1,num2=10){
    return num1 - num2;
}

const result =subtraction(10,5)
console.log(result);


// single line  arrow-function 

const sum = (num1,num2)=> num1+num2;
const total = sum(100,90)
console.log(total);



const multi =(a,b)=>a*b;
const res = multi(100,90)
console.log(res);

// multiline  arrow function 

const calculator = (num1, num2)=>{
    const sum= num1+num2;
    const m= num1*num2;
    const result =m-sum;
    console.log(`the result of sum ${sum} and mult ${m} result ${result} `)
    return result
}
const t = calculator(20,10);
