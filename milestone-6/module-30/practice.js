
// Array ar khetre jai vabe hoi 
const marks=[50,90,70,82,30,20,81,10]



const studentsMarks= marks.map(x=>x/2)
const grathermark= marks.filter(s=>s>50)
const gratherfirst = marks.find(x=>x>50)
//  console.log(gratherfirst);
 

// array of object er khetre jai vabe hoi

const product = [
    {id:1, name:'T-shir', price:2500, brand: 'Easy'},
    {id:2, name:' Pant', price:8000, brand: 'span'},
    {id:3, name:'Shoes', price:9000, brand: 'Bata'},
    {id:4, name:'Watch', price:2800, brand: 'rolex'},
    {id:5, name:'Phone', price:2700, brand: 'Samsung'}
]

const productPrice= product.map(x=>x.price*2)
const productGraterprice = product.filter(x=>x.price>2500)
console.log(productGraterprice)

