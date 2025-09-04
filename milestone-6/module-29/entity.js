const employee={
    name:'jahid',
    desination:"qu",
    salary:200,
    age:25,
    experience:1
}


const keys=Object.keys(employee)
const values=Object.values(employee)
const entries=Object.entries(employee)
console.log(keys)
console.log(values)
console.log(entries)

// any propert delete of object process
// delete employee.experience
// console.log(employee)



// freez er kaj holo  kono property create edit delete and another kisui korte parbanah mane freez korar pore kono kaj kora 

Object.freeze(employee);
employee.salary= employee.salary+2000
console.log(employee.salary)
employee.location='dhaka'
console.log(employee);