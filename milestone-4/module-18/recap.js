let fruits =['mango','guava','painapple','tal','bel']
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits.indexOf('painapple'));
fruits.reverse();
console.log(fruits);

for(fruit in fruits){
    console.log(fruits[fruit]);
}



const ages =[50,24,76,89,14]
const revAge=[];
for(age of ages){
    revAge.unshift(age);
}
console.log(revAge);

const speeds =[50,24,76,89,14];
speeds.reverse();
console.log(speeds);



// sort 
const sortNumber = [1,9,2,3,7,8,4,6]
sortNumber.sort();
console.log(sortNumber);

// ascending sorting 
const gasoil=[5,35,12,18,25];
gasoil.sort(function(a,b){return a-b});
console.log(gasoil);

//descending sorting
gasoil.sort(function(a,b){return b-a})
console.log(gasoil);


// array of object 
let water = [20,91,67,19,46,50]
    water[5]=100;
    
const employees = [
    {name: 'jahid', designation: 'fullstake', salary: 25000},
    {name: 'hassan', designation: 'frontend', salary: 50000},
    {name: 'Abdul Hakim', designation: 'HR', salary: 60000},
]
// console.log(employees[1].name); // 
// console.log(employees[1].salary);
employees[1].name='kamla'
for(employee of employees){
    personInfo = employee.name+': '+employee.salary
    console.log(personInfo)
}