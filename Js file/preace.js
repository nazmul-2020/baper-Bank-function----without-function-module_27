            // Deposit submit 

function totalAmountInput(input){
    const depositInput = document.getElementById(input);
    const depositText =  parseFloat(depositInput.value);
    depositInput.value = ''; 
    return depositText
}

function updatTotal(totalField, Amount){
    const depositAmount = document.getElementById(totalField);
    const depositTotal = parseFloat(depositAmount.innerText);
    depositAmount.innerText = depositTotal + Amount;
}

function updatBalance(totalAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = parseFloat(balanceTotal.innerText);
    if(isAdd == true){
        balanceTotal.innerText = balanceText + totalAmount;
    }
    else{
        balanceTotal.innerText = balanceText - totalAmount;
    }
        
}

    document.getElementById('deposit-btn').addEventListener('click',function(){
   
    const depositText =  totalAmountInput('deposit-input');
        updatTotal('deposit-totel', depositText);
        updatBalance(depositText, true);
})
    document.getElementById('withdrw-btn').addEventListener('click', function(){
   
    const withdrwInputText = totalAmountInput('withdrw-input');
         updatTotal('withdrw-total', withdrwInputText);
        updatBalance(withdrwInputText, false);
})



