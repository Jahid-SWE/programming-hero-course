
function highBudgetPhone(phones){
    let max= phones[0];
    for(let phone of phones){
        if(phone.price>max.price){
            max= phone;
        }
    }
    return max;

}




const phones=[
    {name:'Samsung',price:17000,light:'yes',charger:'yes'},
    {name:'Xoami',price:12000,light:'yes',charger:'yes'},
    {name:'dodol',price:10000,light:'yes',charger:'yes'},
    {name:'Nodia',price:37000,light:'yes',charger:'yes'},
    {name:'Htc',price:200000,light:'yes',charger:'yes'}
]
const highphone=highBudgetPhone(phones);
console.log('This is High Budget Phone',highphone);