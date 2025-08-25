// console.log('home js connected')

// add money functionality
document.getElementById('addMoneyBtn').addEventListener('click',function(e){
    e.preventDefault();
    const bankInfo=document.getElementById('bank').value;
    const accountNumber=parseInt(document.getElementById('account-number').value);
    const addAmount=parseInt(document.getElementById('amount-add').value)
    const uPin=parseInt(document.getElementById('u-Pin').value);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
    const totalBalance=availableBalance+addAmount;
    console.log(bankInfo, accountNumber, addAmount,uPin,availableBalance,totalBalance)
    document.getElementById('available-balance').innerText=totalBalance;


})