//  array er khetre for of  hoi 

const numbers = [2,9,4,3,6,1,8,3]
for(const number of numbers){
    console.log(number)
}

const employee={
    name:'jahid',
    age:25,
    designation:'Engineer',
    salary:200,

}
for(const values in employee){
    console.log(values)
}
for(const key in employee){
    console.log(key)
}