const student = [8,9,1,7, 55,500]
console.log(student)
console.log(...student)
const max= Math.max(...student)
console.log(max)


const first= [10,245,674,8,4]
const second = [1,23,...first]
console.log(first)
console.log(second)


const productPrice =[90,80,70]
const anotherPrice =[30,20,60]
const totalPrice= [...productPrice, ...anotherPrice]
console.log(totalPrice/totalPrice.length);
