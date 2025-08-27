// console.log('home js connected')

// add money functionality

// const validPin = 1234;
// document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
//   e.preventDefault();
//   const bankInfo = document.getElementById("bank").value;
//   const accountNumber = document.getElementById("account-number").value;
//   const addAmount = parseInt(document.getElementById("amount-add").value);
//   const uPin = parseInt(document.getElementById("u-Pin").value);
//   const availableBalance = parseInt(
//     document.getElementById("available-balance").innerText
//   );
//   if (accountNumber.length < 11 || accountNumber.length > 11) {
//     alert("Account number must be 11 digit");
//     return;
//   }

//   if (uPin.length < 4 || uPin.length > 4) {
//     alert("Pin must be 4 digit");
//     return;
//   } else if (uPin !== validPin) {
//     alert("Invalid pin");
//     return;
//   }

// //   const totalBalance = availableBalance + addAmount;
// //   console.log(
// //     bankInfo,
// //     accountNumber,
// //     addAmount,
// //     uPin,
// //     availableBalance,
// //     totalBalance
// //   );
//   document.getElementById("available-balance").innerText = totalBalance;
// });

// //  cash out functionality
// document.getElementById("cashOutBtn").addEventListener("click", function (e) {
//   e.preventDefault();
//   const acctNumber = document.getElementById("acc-number").value;
//   const cashOutAmount = parseInt(
//     document.getElementById("withdraw-amount").value);
//   const pin = parseInt(document.getElementById("cash-out-Pin").value);
// //   console.log(acctNumber, cashOutAmount, pin);
//   const availableBalance = parseInt(document.getElementById("available-balance").innerText);
//   console.log(availableBalance);
//   if (acctNumber.length < 11 || acctNumber.length > 11) {
//     alert("Account number must be 11 digit");
//     return;
//   }
//   if(pin.length<4|| pin.length>4){
//     alert('Pin must be 4 digit')
//     return;
//   }
//   else if(pin!==validPin){
//     alert('Invalid pin')
//     return;
//   }
//   const totalBalance = availableBalance - cashOutAmount;
//   document.getElementById("available-balance").innerText = totalBalance;
// });







// ~~~.      /.....................\~ ~ ~
// updated functionality and better and using function
// add money button
function takeInt(id) {
  const data = document.getElementById(id);
  const acData = data.value;
  const conData = parseInt(acData);
  return conData;
}
function takeString(id) {
  const data = document.getElementById(id);
  const acData = data.value;
  const conData = acData;
  return conData;
}
function innerValue(id){
  const inVal =document.getElementById(id).innerText;
  const conVal=parseInt(inVal);
  return conVal;
}
function setValue(id,val){
  document.getElementById(id).innerText=val
}

const validPhn = 12345678912;
const validPin = 1234;

document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const bankInfo = takeString("bank");
  const accountNumber = takeString("account-number");
  const addAmount = takeInt("amount-add");
  const uPin = takeInt("u-Pin");
  // const availableBalance=takeInt('available-balance');
  // const availableBalance = parseInt(
  //   document.getElementById("available-balance").innerText
  // );
  const availableBalance=innerValue('available-balance');
  if (accountNumber.length > 11 || accountNumber.length < 11) {
    alert("Account number must be 11 digit");
    return;
  }
  if (uPin.length > 4 || uPin.length < 4) {
    alert("Pin must be 4 digit");
    return;
  } else if (uPin !== validPin) {
    alert("Invalid pin");
    return;
  }
  const totalBalance = availableBalance + addAmount;
  // document.getElementById("available-balance").innerText = totalBalance;
  setValue('available-balance',totalBalance);
});

// cash out button
document.getElementById('cashOutBtn').addEventListener('click',function(e){
  e.preventDefault();
  const acctNumber=takeString('acc-number');
  const withdrawAmount=takeInt('withdraw-amount');
  const cashOutPin=takeInt('cash-out-Pin');
  // const availableBalance=document.getElementById('available-balance').innerText;
  const availableBalance=innerValue('available-balance');
  if(acctNumber.length<11||acctNumber.length>11){
    alert('Account number must be 11 digit')
    return;
  }
  if(cashOutPin.length>4||cashOutPin.length<4){
    alert('Pin must be 4 digit')
    return;
  }else if(cashOutPin!==validPin){
    alert('Invalid pin')
    return;
  }
  const totalBalance=availableBalance-withdrawAmount;
  // document.getElementById('available-balance').innerText=totalBalance;
  setValue('available-balance', totalBalance);
})

// toggle function
// display add money
document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("cash-out-feature").style.display = "none";
  document.getElementById("add-money-feature").style.display = "block";
});

// display cash out money
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-feature").style.display = "none";
  document.getElementById("cash-out-feature").style.display = "block";
});
