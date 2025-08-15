
// task 1
// function temperature(celsius){
//     fahrenheit=(celsius *1.8) +32
//     return fahrenheit;
// }
// let celsius= temperature(25);
// console.log(celsius);



// function temperature(fahrenheit){
//     celsius=(fahrenheit-32)*(5/9)
//     return celsius;
// }
// let fahrenheit= temperature(77);
// // console.log(fahrenheit);

// // task 2











// task 3 
function countVowels(str){
    let count = 0
    let lower = str.toLowerCase();
  
  for(let i= 0; i<= lower.length; i++){
    let str =lower[i];
    if(str==='a' || str==='e' || str==='i' || str==='o' || str==='u'){
        count++

    }
  }
  return count;

}
let str = countVowels('universIty');
console.log(str)
