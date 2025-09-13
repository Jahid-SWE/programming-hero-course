// Non Premitive data set 

// setItem in javascript in js localStorage
// const addNumberToLs=()=>{ 
//     const number=Math.ceil(Math.random()*100)
//     console.log(number)
//     localStorage.setItem('numbers', number)
// }

// // non primitive data read kora
// const getNumberFromLS=()=>{
//     const number = localStorage.getItem('number')
//     console.log('Get localStorage from set items number', number);
// }



// const setData=()=>{
//     const number = 500;
//     localStorage.setItem('lg', number)
//     console.log('Your set item is ', number)
// }
// const getData=()=>{
//     const number= localStorage.getItem('Number')
//     console.log('Your number is', number);
    
// }




// primitive data set kora 

// const setObjectData= ()=>{
//     const customer = {name:'Teshirt', id: 3, productPrice:500};
//     const customerData= JSON.stringify(customer);
//     localStorage.setItem('customer', customerData)
//     console.log('Your date set as object is :', customerData)
// }

// primitive data get kora

// const getObjectFromLS =()=>{
//     const customData= localStorage.getItem('customer')
//     const customer= JSON.parse(customData)
//     console.log(customer.productPrice, customer.id)
// }

// const setData=()=>{
//     const name= 'jahid'
//     const setData= localStorage.setItem('name',name)
//     console.log('the deta set is : ',name)
  
// }

// const getData=()=>{
//     const getData= localStorage.getItem('name')
//     console.log(getData)
// }


// const setDataLS= ()=>{
//     // const date = localStorage.setItem('number', 80)
//     const number=Math.ceil(Math.random()*100)
//     console.log( number)
//     localStorage.setItem('number', number)
// }


const setNumber = ()=>{
    const number1= 8
    console.log(number1)
    localStorage.setItem('number', number1)
}

const getNumber =()=>{
    const number = localStorage.getItem('number')
    console.log(number)
}



// jody kono nonprimitive data (array bah object) rakte cai tahole kivabe rakbo abon ki vabe set korbo object abon kivabe get korbo object

// object set 
const setObjectLs=()=>{
    const customer ={'name':'rohim', product: 3, price:34}
    const customerJson= JSON.stringify(customer)
    localStorage.setItem('customer',customerJson)
    console.log(customerJson)
}

// Read object from local storage 
const readObjectFromLs=()=>{
    const customerjson= localStorage.getItem('customer')
    const customer = JSON.parse(customerjson)

    console.log(customer.name)
}