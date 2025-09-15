const person = {
    name: 'jahid',
    age: 25,
    address: 'Dhaka',
    friends: ['Hasnat', 'kolim','jakir', 'pavel'],
    family:{
        father:'joher',
        mothe: 'Jamill'
    }
}

const jsonDate = JSON.stringify(person);
// console.log(jsonDate)
const planeData = JSON.parse(jsonDate)
// console.log(planeData)
// console.log(person)


// fetch  .then etake bole chaining method

// fetch('url')
// .then(res=>res.JSON())
// .then(data=>console.log(''))



// object er keys values kivabe bar kore 

// const student = {
//     name: 'jahid',
//     age: 25,
//     address: 'Dhaka',
//     friends: ['Hasnat', 'kolim','jakir', 'pavel'],
//     family:{
//         father:'joher',
//         mothe: 'Jamill'
//     }
// }


// const keys= Object.keys(student);
// console.log(keys)
// const values= Object.values(student)
// console.log(values)




const products=[
    {name: 'Xiome', brand:'xiaomi',price:3889, color:'red'},
    {name: 'samsung', brand:'sm',price:5000, color:'white'},
    {name: 'Nokia', brand:'nok',price:3889, color:'yello'},
    {name: 'apple', brand:'apple',price:64444, color:'green'},
    {name: 'Apple', brand:'apple',price:3889, color:'blaack'}
]

const newData= {name:'Itel',brand:'Realme',price:5200, colso:'gray'}
const newArray = [...products,newData]
// console.log(newArray)



// amake brand xiaomi brand sara sob product daw tar jonno ja korbo

const remainingProducts= products.filter(pro=>pro.brand!=='xiaomi')
console.log(remainingProducts)
const newArray2 = [...remainingProducts, newData]
console.log(newArray2)