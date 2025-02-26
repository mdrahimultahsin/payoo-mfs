document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phone = document.getElementById("phone-input").value;
    const pin = getInputValueById("pin-input");
    if (phone.length === 11 && phone.startsWith("01")) {
      if (pin === 1234) {
        window.location.href = "../main.html";
      } else {
        alert("Wrong pin");
      }
    } else {
      alert("Invalid Phone Number");
    }
  });
