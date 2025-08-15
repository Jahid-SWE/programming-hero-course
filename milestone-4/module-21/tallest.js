function maxNumber(numbers){
    let max = numbers[0];
    for(let number of numbers){
        if(number>max){
            max=number
        }
    }
    return max;


}
const mxNumber = maxNumber([20,41,67,400,58,79,10]);
console.log(mxNumber);
