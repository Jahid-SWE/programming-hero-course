// default parameter 

function sum(num1, num2){
    const total = num1+num2
    console.log(total)

}
sum(10,20)


function sub(num1,num2 =0){
    subtraction = num1-num2

    console.log(subtraction)
}
sub(10);

function mul(num1, num2=1){
    multiplication = num1*num2
    console.log(multiplication);
    
}
mul(10)

function full_Name(firstName, lastName=''){
    fullName = firstName+lastName
    console.log(fullName)
}
full_Name('kamal', 'hasnat')