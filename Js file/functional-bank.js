document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

                //get curreent deposit

    const depositTotal = document.getElementById('deposit-totel');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
   
                     //  updat total amount

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

                       // clear depositInput field

    depositInput.value = '';
})

                        // Please Withdrw

document.getElementById('withdrw-btn').addEventListener('click', function(){
    const withdrwInput = document.getElementById('withdrw-input');
    const withdrwInputText = withdrwInput.value;
    const withdrwInputTotal = parseFloat(withdrwInputText);
    
    const withdrwTotal = document.getElementById('withdrw-total');
    const withdrwTotalText = withdrwTotal.innerText;
    const previousWithdrwTotal = parseFloat(withdrwTotalText);
    withdrwTotal.innerText = previousWithdrwTotal + withdrwInputTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrwInputTotal;
         // clear withdrwInput field

    withdrwInput.value = '';
})

