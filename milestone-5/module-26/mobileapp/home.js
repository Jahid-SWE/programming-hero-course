const validPin=1234;

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank= document.getElementById('bank').value;
    const accountNumber= document.getElementById('account-number').value;
    const  amount = parseInt(document.getElementById('add-amount').value);
    const pin= parseInt(document.getElementById('add-pin').value);


    const availableBalance= parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length < 11){
        alert('Please Entre valid Account Number');
        return;
    }
    if(pin !== validPin ){
        alert('Please Enter Valid Pin ')
        return;
    }
    const totalNewAvailableBalance= amount+availableBalance;
    document.getElementById('available-balance').innerText= totalNewAvailableBalance;
    console.log(bank, accountNumber,amount,pin ,availableBalance)
})


// cashout money feature

document.getElementById('withdrow-btn').addEventListener('click',function(e){
    e.preventDefault();
    const accountNumber= document.getElementById('account-number').value;
    const  amount = parseInt(document.getElementById('withdrow-amount').value);
    const pin= parseInt(document.getElementById('add-pin').value);


    const availableBalance= parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length < 11){
        alert('Please Entre valid Account Number');
        return;
    }
    if(pin !== validPin ){
        alert('Please Enter Valid Pin ')
        return;
    }
    const totalNewAvailableBalance= amount-availableBalance;
    document.getElementById('available-balance').innerText= totalNewAvailableBalance;
    console.log(bank, accountNumber,amount,pin ,availableBalance)

})

// toggle feature 

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block';
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
    
})
   



/*

const validPin=1234;

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank= document.getElementById('bank').value;
    const accountNumber= document.getElementById('account-number').value;
    const  amount = parseInt(document.getElementById('add-amount').value);
    const pin= parseInt(document.getElementById('add-pin').value);


    const availableBalance= parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length < 11){
        alert('Please Entre valid Account Number');
        return;
    }
    if(pin !== validPin ){
        alert('Please Enter Valid Pin ')
        return;
    }
    const totalNewAvailableBalance= amount+availableBalance;
    document.getElementById('available-balance').innerText= totalNewAvailableBalance;
    console.log(bank, accountNumber,amount,pin ,availableBalance)
})


// cashout money feature

document.getElementById('withdrow-btn').addEventListener('click',function(e){
    e.preventDefault();
    const accountNumber= document.getElementById('account-number').value;
    const  amount = parseInt(document.getElementById('withdrow-amount').value);
    const pin= parseInt(document.getElementById('add-pin').value);


    const availableBalance= parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length < 11){
        alert('Please Entre valid Account Number');
        return;
    }
    if(pin !== validPin ){
        alert('Please Enter Valid Pin ')
        return;
    }
    const totalNewAvailableBalance= amount-availableBalance;
    document.getElementById('available-balance').innerText= totalNewAvailableBalance;
    console.log(bank, accountNumber,amount,pin ,availableBalance)

})

// toggle feature 

document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block';
})
document.getElementById('cash-out-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
    
})
   
*/