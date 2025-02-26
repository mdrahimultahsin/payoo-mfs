//SignOut Btn
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Reload
document.getElementById("logo").addEventListener("click", function () {
  window.location.reload();
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
