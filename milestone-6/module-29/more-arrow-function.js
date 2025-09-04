// single parameter with parenthesis 
const getSquare = (x)=> x*x;

console.log(getSquare(10))

// single parameter nah cailew parenthesis naw dite  paro
const squareHalf= x=> x/2;
console.log(squareHalf(10))


// multiline  arrow function 

const calculator = (num1, num2)=>{
    const sum= num1+num2;
    const m= num1*num2;
    const result =m-sum;
    console.log(`the result of sum ${sum} and mult ${m} result ${result} `)
    return result
}
const t = calculator(20,10);



// kono parameter nai amon arrow function
const logIt= ()=> console.log(78);

logIt();


// annymous function

document.getElementById('').addEventListener('click', ()=>{

})