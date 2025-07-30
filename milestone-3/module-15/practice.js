
// let trees= ['mango','jackfruit', 'pum', 'wooden']
// console.log(trees);
// for(tree of trees){
//     console.log(tree);
// }

// while loop

/* initial start
while (condition){
    block of Code which want to execute
}
*/


// increase value
// let number = 0;
// while(number<10){
//     console.log(number)
//     number++;
// }

// decrease 
// let number=10;
// while(number>=1){
//     console.log(number);
//     number--
// }


/*
let number =1;
let sum = 0;
while(number<=10){
    sum = sum + number;
     console.log(number);
    number++;
}
 console.log(sum);
*/


/*
even odd find out
*/
var number = 0;
evenSum = 0;
oddSum =0;
while(number<10){
    if(number%2===0){
        evenSum = evenSum+number
        console.log('Even number  :', number)
    }
    else{
         oddSum= oddSum+number
        console.log('Odd number   :', number)
    }
    
    number++;
}
console.log('even number sum :', evenSum)
console.log('odd number sum  :', oddSum)