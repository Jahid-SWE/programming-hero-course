

function shopingCart(products){
    let total = 0;
    for(let product of products){
       let totalProductCost = product.price*product.quantity;
        total= total+totalProductCost;
    }
    return total
}

const products=[
    {name:'Sampo',price:50,quantity:3},
    {name:'saban',price:50,quantity:2},
    {name:'musk',price:20,quantity:5},
    {name:'oliv',price:25,quantity:8},
    {name:'fruit',price:10,quantity:7}
]

const shopingCost = shopingCart(products);
console.log(shopingCost);