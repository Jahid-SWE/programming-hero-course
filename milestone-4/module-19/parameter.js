function eat(){
    console.log('You need to Eat ');
    console.log('You need to Eat Fish');
    console.log('You need to Eat nut');
    console.log('You need to Eat freshfood');
}
eat();


function squire(number){
    double = number*number;
    console.log(number, double);
}
squire(5);

function add(a,b,c,d,e){
    result = a+b+c+d+e;
    console.log(result);
}
add(5,8,2,4,10);
add(9,8,2,4,10);

function subtraction(value1, value2){
    sub = value1-value2;
    console.log(sub);
}
subtraction(80,30);
const fatherAge= 65;
const motherAge =55;
subtraction(fatherAge, motherAge);


function fullName(firstName, lastName){
    const fullName=firstName+' '+lastName;
    console.log(fullName); 
}
fullName('jahid', 'Abdul Hakim');




function tentimes(number){
    const result= number*10;
    return result;
}
const bigNumber = tentimes(10);
console.log(bigNumber);


function isEven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
}
const nump=isEven(5);
console.log(nump);
const numpn=isEven(10);
console.log(numpn);