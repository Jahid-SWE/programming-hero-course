const headingColor = document.getElementById('heading');
headingColor.style.border='10px solid red';
// console.log(headingColor)

const newElement = document.getElementById('newul');
const newul= document.createElement('li');
newul.innerText='i Love my mother';
newElement.appendChild(newul);

console.log(newElement)