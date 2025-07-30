
// 'task one'

// let price = 510;
// if(price>=500){
//     console.log('you will get free cock')
// }
// else{
//     console.log('you need to pay 30 taka', )
// }


// task two

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 58;
// let height= 1.2;
// let bmi = weight/((height)*2);
// let bmi =15.5;
// if (bmi < 18.5) {
//     console.log('underweight',bmi.toFixed(2));
// }
// else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log('You are Normal',bmi.toFixed(2));
// }
// else if (bmi >= 25 && bmi <= 29.9) {
//     console.log('you are overweight',bmi.toFixed(2));
// }
// else {
//     console.log('You are obese', bmi.toFixed(2))
// }



// task three
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let marks=59;
// if(marks>=90 && marks<=100){
//     console.log("You Got : A");
// }
// else if(marks>=80 && marks<=89){
//     console.log("you Got : B")
// }
// else if(marks>=70 && marks<=79){
//     console.log("you Got : C")
// }
// else if(marks>=60 && marks<=69){
//     console.log("you Got : D")
// }
// else if(marks>=101 && marks<0){
//     console.log("Error range ")
// }
// else{
//     console.log("you Are Fail")
// }


// task four
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
// let myMarks =80;
// let friendMarks =120;
// if(myMarks>=80){
//     if (friendMarks>=80){
//         console.log('Go to lunch');
//     }
//     else if(friendMarks<80 && friendMarks>=60){
//         console.log('Good Luck next time.');
//     }
//     else if(friendMarks<60 && friendMarks>40){
//         console.log('Unseen message');
//     }
//     else{
//         console.log('Block my friend');
//     }
// }
// else{
//     console.log('Go to Home and sleep ')
// }




// task six 

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



let price = 800;
let age = 29;
let isStudents= true;
if(age<10){
    console.log('Ticket fare free');
}
else if(isStudents){
    let fare = price*(50/100);
    console.log('Student will ticket fare', fare);
}
else if(age>=60){
    let fare = price*(15/100);
    console.log('Senior citizen will give ticket fare', fare);
}

else{
    console.log('Your ticked fare ', price);
}