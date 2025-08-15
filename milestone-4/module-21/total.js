

function totalShoping(products){
    let amount = 0;
    for(let product of products){
        amount=amount+product.price;
    }
  return amount;
}


const products= [
    {name:'sampu', price:500},
    {name:'saban', price:200},
    {name:'tail', price:50},
    {name:'biscate', price:100},
]
const total = totalShoping(products);
console.log('Aj total bazar hobe : ', total);