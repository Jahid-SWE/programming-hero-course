// normal process array
const ages= [42,9,7,64,8,6]
const d= []
for(const age of ages){
   const dbl= age*2
    d.push(dbl)
}
console.log(d)

const numbers =[4,6,7,2,1,34,8]
const squire =[]
for (const number of numbers){
    result=number *2
    squire.push(result)
}
console.log(squire);


// using map function
let number = [1,4,2,7,9,8,25]
const friends = ['jdahid', 'hassan', 'hab', 'tok']

const double= number.map(num=>num*2)
console.log(double)

const firstLetter = friends.map(name=>name[0].toUpperCase())
console.log(firstLetter)


const age = [10,2,4,3,5,6]
const sqr = s=>age*2
const dbl= age.map(sqr)

number = [1,4,2,7,9,8,25]
const squired =number.map(x=>x*2)
const faverite10= number.map(x=>x*10)
const squiredNumber = number.map(number=>number*number)
console.log(squiredNumber)
console.log(faverite10)
