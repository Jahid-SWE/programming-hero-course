const number=[10,54,67,5,45,47]
const np= number.reduce((acc, cru)=> acc+cru)
console.log(np);


let items = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 250 }
];
let totalprice= items.reduce((acc, item)=>acc+item.price,0)
console.log(totalprice)
