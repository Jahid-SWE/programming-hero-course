// normal function
function add(num1, num2){
    const result=num1+ num2
    console.log(result)
}
add(50,9)


// Arrow Function 
//single line Arrow Function
const add2 = (number1, number2)=>number1+number2;

const result= add2(50,80)
console.log(result)

// Multiline Arrow function
const duble=(x,y)=>{
    const makeDouble= x*2
    const trible= y*3
    const result= makeDouble+trible
    return result
}
console.log( duble(10,20))