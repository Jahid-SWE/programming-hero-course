// Function decleration
function add(num1,num2){
    return num1+num2
}
console.log(add(10,80))


// Function Expression
const addition = function(num1, num2){
    return num1+num2;
}
console.log(addition(45,80))


// arrow function single line 
const multiply = (num1,num2)=>num1*num2;
console.log(multiply(12,20))


const subtraction = (e1,e2, e3)=>e1+e2;
console.log(subtraction(50,10));


const age = (yourAge, yourFriendAge) => (yourAge+yourFriendAge)/2;
console.log(age(25,35));


// arrow multiple line function

const student = ( name, department, subject)=>{
    return name, department,subject ;
}
const studentInfo= student(12,84,78)
console.log(`My name is ${name}  Department ${department} and subject ${subject}`);