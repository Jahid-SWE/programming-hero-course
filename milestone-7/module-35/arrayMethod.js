const products=[
    {name: 'Xiome', brand:'xiaomi',price:3889, color:'red'},
    {name: 'samsung', brand:'sm',price:5000, color:'white'},
    {name: 'Nokia', brand:'nok',price:3889, color:'yello'},
    {name: 'apple', brand:'apple',price:64444, color:'green'},
    {name: 'Apple', brand:'apple',price:3889, color:'blaack'}
]


// map

// const result = products.map(product=>product.brand)
// console.log(result)


// foEach
// products.forEach(product=>console.log(product.price))


 
// filter (filter return kor array)

// const result=products.filter(product=>product.price>=5000)
// console.log(result);


// find (find retur kore boject )

const result= products.find(product=>product.name==='Apple')
console.log(result)
