
function minNumber(numbers){
    min= numbers[0];
    for(let number of numbers){
        if(number<min){
            min = number;
        }
    }
    return min;
}

const mnNumber = minNumber([20,41,67,400,58,79,10]);
console.log(mnNumber);