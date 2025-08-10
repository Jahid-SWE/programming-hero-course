
/**
 * Write a JavaScript code to reverse the array colors without using the reverse method.
   Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
 */

// const colors=['red','green','blue','yellow','orrange'];
// const revColors=[];
// for(i=0; i<colors.length; i++){
// revColors.unshift(colors[i]);
// }
// console.log(revColors)

// const Colors=['red','green','blue','yellow','orrange'];
// Colors.reverse();
// console.log(Colors)

/**
 * Task 2
    Write a JavaScript code to get the even numbers from an array using any looping technique.
    Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

   

 */

    // const numbers = [12, 98, 5, 41, 23, 78, 46];
    // const evenNumber =[];
    // for( let number of numbers){
    // if(number%2===0){
    //     evenNumber.push(number);
    // }
    // }
    // console.log(evenNumber)

/**
 * * Task 3
 * Use a for...of loop to concatenate all the elements of an array into a single string.
    Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

    

 */
// const numbers = ['Top','Tim','Tin', "Tik"];
// let concateNumber="";
// for(number of numbers){
//     concateNumber+=number;
// }
// console.log(concateNumber);



/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */
// let statement = 'I am a hard working person';
// let word = statement.split(" ");
// word.reverse();
// let revereWord= word.join(" ");
// console.log(revereWord);






/**
 * Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
 */

// let carSpeeds =[1,2,3];
// let bmdCarSpeed =[];
// for(let carSpeed of carSpeeds){
//     bmdCarSpeed.push(carSpeed);
// }


// bmdCarSpeed[0]=99;
// console.log(carSpeeds);
// console.log(bmdCarSpeed);



/**
 * Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
 */

// let students=[
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// for(student of students){
//     console.log(student.name+' score '+student.marks)
// }




/**
 * Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
 */
// let productsCodes= [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// productsCodes[1][0]=99;
// for(let productCode of productsCodes){
//     console.log(productCode)
// }

