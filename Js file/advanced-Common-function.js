
function getInputtValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
// clear depositInput field
     inputField.value = '';
    return amountValue;
}

function updatTotalField(totalFieldId, amount ){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updatBalance(depositAmount, isAdd){
   const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function(){
   
    const depositAmount =getInputtValue('deposit-input');
        updatTotalField ('deposit-totel', depositAmount );
        updatBalance(depositAmount, true);

})

document.getElementById('withdrw-btn').addEventListener('click', function(){
    
    const withdrwAmount =getInputtValue('withdrw-input');
        updatTotalField('withdrw-total', withdrwAmount);
        updatBalance(withdrwAmount, false);

})




                                // on click

// function depositInput(){
//     const depositAmount = document.getElementById('deposit-input');
//     const depositAmountTotal = document.getElementById('deposit-totel');
//     console.log(depositAmount.value);
//     console.log(depositAmountTotal.innerText );
// }