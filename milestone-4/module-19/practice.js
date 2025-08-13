function make_avg(numbers){

    for(let number of numbers){
        sum= sum+number
        result = sum/numbers.length;
        // console.log(number)
        // console.log(sum)
        // console.log(result)
        
    }
    return sum;
}
let sum = 0;
make_avg([10,20,30,90]);
console.log(sum)
console.log(result)