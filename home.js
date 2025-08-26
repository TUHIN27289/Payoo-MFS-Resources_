// console.log('home js connected')

// add money functionality
const validPin = 1234;
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const bankInfo = document.getElementById("bank").value;
  const accountNumber =
    document.getElementById("account-number").value;
  const addAmount = parseInt(document.getElementById("amount-add").value);
  const uPin = parseInt(document.getElementById("u-Pin").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (accountNumber.length < 11 || accountNumber.length > 11) {
    alert("Account number must be 11 digit");
    return;
  }

  if (uPin.length < 4 || uPin.length > 4) {
    alert("Pin must be 4 digit");
    return;
  } else if (uPin !== validPin) {
    alert("Invalid pin");
    return;
  }
  const totalBalance = availableBalance + addAmount;
  console.log(
    bankInfo,
    accountNumber,
    addAmount,
    uPin,
    availableBalance,
    totalBalance
  );
  document.getElementById("available-balance").innerText = totalBalance;
});


//  cash out functionality





// toggle function
// display add money
document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('cash-out-feature').style.display='none';
    document.getElementById('add-money-feature').style.display='block';
})

// display cash out money
document.getElementById('cash-out-btn').addEventListener('click',function(){
    document.getElementById('add-money-feature').style.display='none';
    document.getElementById('cash-out-feature').style.display='block';
})