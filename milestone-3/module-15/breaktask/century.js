/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
// for loop
// for(let startNumber =1; startNumber<=200;startNumber++){
//     console.log(startNumber)
//     if(startNumber===100){
//         break;
//     }
// }


// while loop need to help
// let startNumber =1;
// while(startNumber<=200){
//     if(startNumber<=10){ // whats problem
//         break;
//     }
//     console.log(startNumber);
//     startNumber++
// }


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// for loop
// let sum =0;
// for(let i= 1; i<=200; i++ ){
//     sum = sum+i;
//     if(sum>=100){
//         break;
//     }
//     console.log(i)
// }
//  console.log('total sum is : ',sum)


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for(let i = 1; i<=100; i++){
    if((i*i)/i==1){
        break;
    }
}
console.log(i)