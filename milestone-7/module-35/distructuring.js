//  Array destructuring  
const friends =['Jahid','Hassan','Katal','Ruhul','Peplonal','Hasib','Kamal']

const [friend1,friend2,friend3,friend4,friend5]=friends
// console.log(friend1)



// object destructuring

const person= {
    name:'Jahid',
    age: 25,
    isStudent: false,
    job: 'Dhaka',
    salary: 250
}


const {name, job, salary}=person
// console.log(salary)

// if(salary>2000){
//     salary+100
//    console.log(salary)
// }
// else{
//     console.log('No Salary')
// }
