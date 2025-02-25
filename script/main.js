//SignOut Btn
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../login.html";
});

// Card Seclection

const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("click", function () {
    for (const otherCard of cards) {
      otherCard.classList.remove("card-active");
    }
    card.classList.add("card-active");
  });
}

/**
 * Add Money Function
 */

// Section Show
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    const addMoneyContainer = document.getElementById("add-money-container");
    addMoneyContainer.classList.remove("hidden");
    document.getElementById("cashout-container").classList.add("hidden");
  });

// Functionalities
document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.querySelector("#number-input").value;
    const pinInput = document.querySelector("#pin-input").value;
    const pinValue = Number(pinInput);
    let mainBalance = document.getElementById("main-balance").innerText;
    const mainBalanceValue = parseFloat(mainBalance);
    const addAmount = document.getElementById("add-amount").value;
    const addAmountValue = parseFloat(addAmount);
    const selectBank = document.querySelector(".select").value;
    if (numberInput.length === 11 && numberInput.startsWith("01")) {
      if (selectBank !== "") {
        if (pinValue === 1234) {
          let sum = mainBalanceValue + addAmountValue;
          document.getElementById("main-balance").innerText = sum;
        } else {
          alert("Wrong pin");
        }
      } else {
        alert("Select A Bank");
      }
    } else {
      alert("Invalid Phone Number");
    }
  });

/**
 * CashOut Function
 */

// Section Show
document.getElementById("cashout-card").addEventListener("click", function () {
  const cashoutContainer = document.getElementById("cashout-container");
  cashoutContainer.classList.remove("hidden");
  document.getElementById("add-money-container").classList.add("hidden");
});

// Functionalities
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.querySelector("#number-input").value;
    const pinInput = document.querySelector("#pin-input").value;
    const pinValue = Number(pinInput);
    let mainBalance = document.getElementById("main-balance").innerText;
    const mainBalanceValue = parseFloat(mainBalance);
    const cashoutAmount = document.getElementById("cashout-amount").value;
    const cashoutAmountValue = parseFloat(cashoutAmount);
    if (numberInput.length === 11 && numberInput.startsWith("01")) {
      if (pinValue === 1234) {
        if (mainBalanceValue > 0) {
          let sum = mainBalanceValue - cashoutAmountValue;
          sum >=0?document.getElementById("main-balance").innerText = sum:alert("Insufficient Balance");
        } else {
          alert("Insufficient Balance");
        }
      } else {
        alert("Wrong pin");
      }
    } else {
      alert("Invalid Phone Number");
    }
  });
