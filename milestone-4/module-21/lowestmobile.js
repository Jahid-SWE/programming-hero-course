function lowestMobile(prices){
    min = price[0]
    for(let price of prices){
        // console.log(price);
        if(price<min){
            min = price;
            
        }
    }
}

const mobilePrice= lowestMobile([180000,64000,80000,10000,20000]);
console.log(mobilePrice);