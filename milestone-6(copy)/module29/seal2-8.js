const emplyee={
    name:'jahid',
    designatio:'Swe',
    salary:3884,
    experience:4,
}
// seal you will give modification but not delet and add property 

Object.seal(emplyee)
console.log(emplyee)
emplyee.salary=emplyee.salary+500
console.log(emplyee.salary)
delete emplyee.experience
emplyee.location='dhaka'
console.log(emplyee)
