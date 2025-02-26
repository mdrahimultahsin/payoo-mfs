document.getElementById("addmoney-btn").addEventListener("click", function (event) {
    event.preventDefault()
  const mainBalance = getInnerTextById("main-balance");
  const number = document.getElementById("account-number").value;
  const pin = getInputValueById("addmoney-pin");
  const amount = getInputValueById("add-amount");
  const selectBank = document.querySelector("#select-bank").value;
  if(amount<=0){
    alert("Invalid Amount");
    return;
  }
  if (number.length === 11 && number.startsWith("01")) {
    if (selectBank !== "") {
      if (pin === 1234) {
        let sum = mainBalance + amount;
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
        <div title="Account No: ${number}">
            <h2 class="text-base font-semibold">Add Money</h2>
            <p class="text-blue-500">From: ${selectBank}</p>
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
        return;
      }
    } else {
      alert("Select A Bank");
      return;
    }
  } else {
    alert("Invalid Number");
    return;
  }
});
