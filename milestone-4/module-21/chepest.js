
function cheapestPhone(phones){
    min = phones[0]
    for(let phone of phones){
        if(phone.price<min.price){
            min= phone;
        }
    }
    return min;
}

phones =[
    {name:'samsung',price:20000,camera:'13MP', color:'black'},
    {name:'Iphon',price:120000,camera:'13MP', color:'black'},
    {name:'Oppos',price:10000,camera:'13MP', color:'black'},
    {name:'xoami',price:70000,camera:'13MP', color:'black'},
    {name:'Nokia',price:17000,camera:'13MP', color:'black'},
    {name:'walton',price:15000,camera:'13MP', color:'black'},
    {name:'HTC',price:30000,camera:'13MP', color:'black'}
];
const phoneInfo= cheapestPhone(phones);
console.log('Here MiniMum range price is : ',phoneInfo)
