            // Deposit submit 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositText =  parseFloat(depositInput.value);

    const depositAmount = document.getElementById('deposit-totel');
    const depositTotal = parseFloat(depositAmount.innerText);
    depositAmount.innerText = depositTotal + depositText;

    const balanceTotal = document.getElementById('balance-total');
    const balanceText = parseFloat(balanceTotal.innerText);
        balanceTotal.innerText = balanceText + depositText;

        depositInput.value = ''; 
})

document.getElementById('withdrw-btn').addEventListener('click', function(){
    const withdrwInput = document.getElementById('withdrw-input');
    const withdrwInputText = parseFloat(withdrwInput.value);

    const withdrwTotal = document.getElementById('withdrw-total');
    const withdrwTotalAmount = parseFloat(withdrwTotal.innerText);
    withdrwTotal.innerText = withdrwTotalAmount + withdrwInputText;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = parseFloat(balanceTotal.innerText);
     balanceTotal.innerText = balanceTotalText - withdrwInputText;

    withdrwInput.value = '';
})


