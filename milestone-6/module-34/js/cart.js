const handleAddProducts = ()=>{
    const productElement = document.getElementById('product')
    const quantityElement = document.getElementById('quantity')
    const product = productElement.value;
    const quantity= quantityElement.value;

    console.log('Add product successfully', product, quantity)
    productElement.value='';
    quantityElement.value='';

}