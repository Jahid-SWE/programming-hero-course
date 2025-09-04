const person ={
    name: 'Jahid',
    deperarment :'Software ',
    age:25,
    isStudent: true
}
const personNode = JSON.stringify(person);
console.log(personNode, typeof personNode)
const personJson= JSON.parse(personNode);
console.log(personJson, typeof personJson) 