document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextById("main-balance");
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueById("cashout-amount");
    const pin = getInputValueById("pin-input");

    if (agentNumber.length === 11 && agentNumber.startsWith("01")) {
      if (amount >= 0 && mainBalance > amount) {
        if (pin === 1234) {
          let sum = mainBalance - amount;
          setInnerTextById("main-balance", sum);

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
      <div class="flex items-center gap-5">
          <img class="h-10" src="assets/wallet1.png" alt="" />
          <div>
              <h2 class="text-base font-semibold">Cash Out</h2>
              <p class="text-blue-500">Agent No: ${agentNumber}</p>
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
        } else {
          alert("Incorrect Pin");
        }
      } else {
        alert("Insufficient Balance");
        return;
      }
    } else {
      alert("Invalid Number");
      return;
    }
  });
