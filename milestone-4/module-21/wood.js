function woodQuantity(table, chair, bed){
    const tablequantity =3;
    const chairquantity =10;
    const bedquantity =50;
    
    const tableTotal = table * tablequantity;
    const chairTotal = chair * chairquantity;
    const bedTotal   = bed   * bedquantity;

    totalWoodPrice = tableTotal+chairTotal+bedTotal;
    
    return totalWoodPrice;
}
const woodprice= woodQuantity(0,10,10);
console.log(woodprice)