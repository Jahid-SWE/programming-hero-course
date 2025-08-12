let subject = [
    'physics', 
    'javascript', 
    'math',
    'biology'
]
// console.log(subject);
for(let i=0; i<subject.length; i++){
    console.log(subject[i]);
}
rev=subject.reverse()
console.log(rev);

sor=subject.sort()
console.log(sor)


// practice task 1

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColors =[];
for(let i=0; i<colors.length; i++){
    revColors.unshift(colors[i]);
    

}
console.log(revColors);

// practice task 2
let numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber =[];
let sum = 0
/**
  for(let i= 0; i<numbers.length; i++){
 let currentNumber= numbers[i];
if(currentNumber%2===0){
    sum = sum+ currentNumber;
    evenNumber.push(currentNumber);

}
}
console.log(evenNumber);
console.log(sum);
 */
 


// practice 2 bikolpo
 for(number of numbers){
    if(number%2===0){
    sum= sum+number
        evenNumber.push(number);   
    }
}console.log(evenNumber);
console.log(sum);

// practice 3
const names = ['Tom', 'Tim', 'Tin', 'Tik'];
addname=''
for(name of names){
    addname+=name;
    
}
console.log(addname);