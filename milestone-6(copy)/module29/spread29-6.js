const age=[442,64,13,9,87,45,70]
const newage=Math.max(...age)
// console.log(newage)

// Array Spread Operator
const englishMarks= [78,97,84,12,38,64,86]
const banglaMarks= [75,97,8,76,79,41,50]
const newEnglishMarks=[...englishMarks, 99]
console.log(englishMarks)
console.log(newEnglishMarks)


// Object spread operato
const student={name:'jahid', age:25, department:'science'}
const newStudent={status:'regular'}
const studentStatus={...student, ...newStudent}
console.log(studentStatus)

