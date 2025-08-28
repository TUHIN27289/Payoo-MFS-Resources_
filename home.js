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

//   function
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
function innerValue(id) {
  const inVal = document.getElementById(id).innerText;
  const conVal = parseInt(inVal);
  return conVal;
}
function setValue(id, val) {
  document.getElementById(id).innerText = val;
}
function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}
function displayNone(id) {
  document.getElementById(id).style.display = "none";
}
const validPhn = 12345678912;
const validPin = 1234;
const transactionData = [];

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
  const availableBalance = innerValue("available-balance");
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
  if(addAmount<=0){
    alert('Insert correct amount')
    return;
  }
  const totalBalance = availableBalance + addAmount;
  // document.getElementById("available-balance").innerText = totalBalance;
  setValue("available-balance", totalBalance);
  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
  // const transactionInfo={
  //   bankInfo:bankInfo,
  //   accountNumber:accountNumber,
  //   addAmount:addAmount,
  //   uPin:uPin,
  //   availableBalance:availableBalance,
  //   totalBalance:totalBalance
  // }
});

// cash out button
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const acctNumber = takeString("acc-number");
  const withdrawAmount = takeInt("withdraw-amount");
  const cashOutPin = takeInt("cash-out-Pin");
  // const availableBalance=document.getElementById('available-balance').innerText;
  const availableBalance = innerValue("available-balance");
  if (acctNumber.length < 11 || acctNumber.length > 11) {
    alert("Account number must be 11 digit");
    return;
  }
  if (cashOutPin.length > 4 || cashOutPin.length < 4) {
    alert("Pin must be 4 digit");
    return;
  } else if (cashOutPin !== validPin) {
    alert("Invalid pin");
    return;
  }
  if(withdrawAmount<=0){
    alert('Insert correct amount')
    return;
  }else if(withdrawAmount>availableBalance){
    alert('Insufficient balance')
    return;
  }
  const totalBalance = availableBalance - withdrawAmount;
  // document.getElementById('available-balance').innerText=totalBalance;
  setValue("available-balance", totalBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});

// Money transfer button
document
  .getElementById("moneyTranssferBtn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const acc1tNumber = takeString("tranfer-acc-number");
    const sendAmount = takeInt("send-amount");
    const availableBalance = innerValue("available-balance");
    const transferPin = takeString("transfer-Pin");
    if (acc1tNumber.length !== 11) {
      alert("Account number must be 11 digit");
      return;
    }
    if (transferPin.length !== 4) {
      alert("Pin must be 4 digit");
      return;
    } else if (parseInt(transferPin) !== validPin) {
      alert("Invalid Pin");
      return;
    }
    const totalBalance = availableBalance - sendAmount;
    setValue("available-balance", totalBalance);
  });

// toggle function

// //                       ~ ~ ~                     way-1                ~ ~ ~

// // display add money
// document.getElementById("add-money-btn").addEventListener("click", function () {
//   document.getElementById("cash-out-feature").style.display = "none";
//   document.getElementById("add-money-feature").style.display = "block";
// });

// // display cash out money
// document.getElementById("cash-out-btn").addEventListener("click", function () {
//   document.getElementById("add-money-feature").style.display = "none";
//   document.getElementById("cash-out-feature").style.display = "block";
// });

// //                       ~ ~ ~                     way-2                ~ ~ ~

// // display transfer money
// document.getElementById('transfer-money-btn').addEventListener('click',function(e){
//   displayBlock('transfer-money-feature');
//   displayNone('add-money-feature');
//   displayNone('cash-out-feature');
// })

//                   // ~ ~ ~                     way-3              ~ ~ ~
//
//
//
//
//

// // display add money

// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (e) {
//     const f_lists = document.getElementsByClassName("f-list");
//     for (const i of f_lists) {
//       i.style.display = "none";
//     }
//     displayBlock("add-money-feature");
//   });

//   // // display cash out money
// document.getElementById("cash-out-btn").addEventListener("click", function (e) {
//   const f_lists = document.getElementsByClassName("f-list");
//   for (const i of f_lists) {
//     i.style.display = "none";
//   }
//   displayBlock("cash-out-feature");
// });

// // // display transfer money
// document
//   .getElementById("transfer-money-btn")
//   .addEventListener("click", function (e) {
//     const f_lists = document.getElementsByClassName("f-list");
//     for (const i of f_lists) {
//       i.style.display = "none";
//     }
//     displayBlock("transfer-money-feature");
//   });

document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText='';
    for (const i of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
     <div class="flex justify-between items-center bg-white p-3 rounded-2xl mt-3">
            <div class="">
              <div class="flex justify-center items-center gap-x-3">
                <div class=" p-3 rounded-full bg-[#F4F5F7]">
                  <img src="./assets/money1.png" />
                </div>
                <div>
                  <h1 class="outfit-font text-lg font-semibold text-[#080808] ">${i.name}</h1>
                  <p class="outfit-font text-xs font-normal text-[#080808B3] mt-0.5">${i.date}</p>
                </div>
              </div>
            </div>
            <div class="">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
  `;
      // transactionContainer.appendChild(div);
      transactionContainer.prepend(div);

    }
  });

//  // ~ ~ ~                     way-4              ~ ~ ~
//  function to handle toggle

function toggleHandle(id) {
  const f_lists = document.getElementsByClassName("f-list");
  for (const i of f_lists) {
    i.style.display = "none";
  }
  //  displayBlock(id);
  document.getElementById(id).style.display = "block";
}

// function to handle button background
function buttonBgToggle(id) {
  let fromBtns = document.getElementsByClassName("f-btn");
  for (const i of fromBtns) {
    i.classList.remove("bg-[#F4F5F7]", "border-2", "border-teal-900");
  }
  document
    .getElementById(id)
    .classList.add("border-2", "border-teal-900", "bg-[#F4F5F7]");
}

// // display add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    toggleHandle("add-money-feature");
    buttonBgToggle("add-money-btn");
  });

// // display cash out money
document.getElementById("cash-out-btn").addEventListener("click", function () {
  toggleHandle("cash-out-feature");
  buttonBgToggle("cash-out-btn");
});

// // // // display transfer money
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    toggleHandle("transfer-money-feature");
    buttonBgToggle("transfer-money-btn");
  });
// // // // display get bonus
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    toggleHandle("get-bonous-feature");
    buttonBgToggle("get-bonus-btn");
  });

// // // // display pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  toggleHandle("pay-now-feature");
  buttonBgToggle("pay-bill-btn");
});

// display transaction
document
  .getElementById("transactions-btn")
  .addEventListener("click", function (e) {
    toggleHandle("transaction-feature");
    buttonBgToggle("transactions-btn");
  });
