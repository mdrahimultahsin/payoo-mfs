document.getElementById('send-now-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mainBalance = getInnerTextById("main-balance");
    const number = document.getElementById("user-account-number").value;
    const pin = getInputValueById('transfer-pin');
    const amount = getInputValueById('transfer-amount');
    if(amount>=0 && amount<mainBalance){
        if(number.length ===11 && number.startsWith('01')){
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
      <div class="flex items-center gap-5">
          <img class="h-10" src="assets/wallet1.png" alt="" />
          <div>
              <h2 class="text-base font-semibold">Transfer Money</h2>
              <p class="text-blue-500">User Account No: ${number}</p>
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
                return;
            }
        }
        else{
            alert("Invalid Number");
            return;
        }
    }
    else{
        alert('Invalid Amount');
        return;
    }
})