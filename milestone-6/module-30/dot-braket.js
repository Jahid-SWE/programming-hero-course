const student={
    name:'jahid',
    1:4550,
    marks:80
}
// dot diye property dekha
const studentName=student.name
// console.log(student)


// bracket notation
const studentOne= student['1'];
// console.log(studentOne);



const product={
    name:'laptp',
    price:52545,
    brand:'Hp',
    'Shope Name':{
        location: 'dhaka',
        'shope number': 405,
    }
}

console.log(product['Shope Name']?.['shope number']);