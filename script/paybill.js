document.getElementById("paybill-btn").addEventListener("click", function (event) {
    event.preventDefault()
  const mainBalance = getInnerTextById("main-balance");
  const selectBiller = document.querySelector("#select-to-pay").value;
  const number = document.getElementById("biller-number").value;
  const amount = getInputValueById("paybill-amount");
  const pin = getInputValueById("paybill-pin");

  if(selectBiller !==''){

    if(amount>=0 && mainBalance>amount){
        if (number.length === 11 && number.startsWith("01")) {
            if(pin === 1234){
                let sum = mainBalance - amount;
                setInnerTextById("main-balance",sum);


                //   Transaction History
          const transactionHistories = document.getElementById(
            "trasactions-histories"
          );
          // Transaction Id generate

          const div = document.createElement("div");
          div.setAttribute(
            "class",
            "bg-white rounded-xl border border-gray-300 flex justify-between items-center px-5 py-4 mb-4"
          );
          div.innerHTML = `
      <div class="flex items-center gap-5" title="Biller No :${number}">
          <img class="h-10" src="assets/wallet1.png" alt="" />
          <div>
              <h2 class="text-base font-semibold">Pay Bill</h2>
              <p class="text-blue-500">To: ${selectBiller}</p>
              <p class="text-gray-color">${new Date().toLocaleString()}</p>
          </div>
      </div>
      <div>
          <p class="text-black font-semibold">$: ${amount}</p>
          <p class="text-gray-color">T_ID: ${generateTransactionId()}</p>   
      </div>
  </div>
      `;
          transactionHistories.appendChild(div);
            }
            else{
                alert("Incorrect Pin");
            }
        }
        else{
            alert('Invalid Number');
            return;
        }
    }
    else{
        alert('Invalid Amount');
        return;
    }
  }
  else{
    alert('Select Biller');
    return;
  }
});
