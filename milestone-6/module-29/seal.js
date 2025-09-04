const employee={
    name:'jahid',
    desination:"qu",
    salary:200,
    age:25,
    experience:1
}


// seal modify korte dai but freez konotai korte dain nah
// ekhane salary modification ba update korteparci baki kisudelet kora jai nahadd kora jai nah
Object.seal(employee);
delete employee.salary
employee.salary= employee.salary+500
console.log(employee.salary)
employee.location='dhaka'
console.log(employee);