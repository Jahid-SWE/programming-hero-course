const emplyee={
    name:'jahid',
    designatio:'Swe',
    salary:3884,
    experience:4,
}
Object.freeze(emplyee)
console.log(emplyee)
emplyee.salary=emplyee.salary+200
console.log(emplyee.salary)
delete emplyee.experience
console.log(emplyee)
