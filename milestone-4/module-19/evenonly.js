function evenNumber(numbers){
    let sum = 0; 
    let evenNumbers=[];
    for(const number of numbers){
        if(number%2===0){
            sum=sum+number;
            evenNumbers.push(number);
        }
    }
     return{
        evenNumbers,//sum
     } 
}

const number=[48,27,21,36,15,18];
const numb=evenNumber(number);
console.log('The even Numbers are : ', numb.evenNumbers);
// console.log('The even Numbers sum : ', numb.sum)
