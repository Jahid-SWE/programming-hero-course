const students=[
    {id:1, name:'jahid', marks:30},
    {id:2, name:'hassan', marks:50},
    {id:3, name:'polash', marks:90},
    {id:4, name:'babu', marks:60},
    {id:5, name:'hashem', marks:100}
]
const names= students.map(x=>x.name) 
const marks= students.map(x=>x.marks)
const grather50= students.filter(x=>x.marks>50) // 50 er upra sob gulo diye dibe 
const marks50= students.find(x=>x.marks>50)// 50 er upre jaita ache markd first ta diye dibe second ta te jabe nah first ta paile
console.log(marks50)