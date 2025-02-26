handleToggle("add-money-container", "none");
handleToggle("cashout-container", "none");
handleToggle("transaction-container", "none");
handleToggle("transfer-money-container", "none");
handleToggle("recharge-container", "none");
handleToggle("paybill-container", "none");
// Add money card
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    handleToggle("add-money-container", "block");
    handleToggle("cashout-container", "none");
    handleToggle("transaction-container", "none");
    handleToggle("transfer-money-container", "none");
    handleToggle("recharge-container", "none");
    handleToggle("paybill-container", "none");
  });
//   Cashout Card
document
  .getElementById("cashout-card")
  .addEventListener("click", function () {
    handleToggle("add-money-container", "none");
    handleToggle("cashout-container", "block");
    handleToggle("transaction-container", "none");
    handleToggle("transfer-money-container", "none");
    handleToggle("recharge-container", "none");
    handleToggle("paybill-container", "none");
  });
//   Transfer Card
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    handleToggle("add-money-container", "none");
    handleToggle("cashout-container", "none");
    handleToggle("transaction-container", "none");
    handleToggle("transfer-money-container", "block");
    handleToggle("recharge-container", "none");
    handleToggle("paybill-container", "none");
  });

  // Recharge Card
  document.getElementById('recharge-card').addEventListener('click',function(){
    handleToggle("add-money-container", "none");
    handleToggle("cashout-container", "none");
    handleToggle("transaction-container", "none");
    handleToggle("transfer-money-container", "none");
    handleToggle("recharge-container", "block");
    handleToggle("paybill-container", "none");
  })
  // Paybill Card
  document.getElementById('paybill-card').addEventListener('click',function(){
    handleToggle("add-money-container", "none");
    handleToggle("cashout-container", "none");
    handleToggle("transaction-container", "none");
    handleToggle("transfer-money-container", "none");
    handleToggle("recharge-container", "none");
    handleToggle("paybill-container", "block");
  })


//   Transaction Card
document
  .getElementById("transaction-card")
  .addEventListener("click", function () {
    handleToggle("add-money-container", "none");
    handleToggle("cashout-container", "none");
    handleToggle("transaction-container", "block");
    handleToggle("transfer-money-container", "none");
    handleToggle("recharge-container", "none");
    handleToggle("paybill-container", "none");
  });



