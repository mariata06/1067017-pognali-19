var button = document.querySelector(".profile__tariff-button");

var popup = document.querySelector(".business-tariff");

var close = popup.querySelector(".business-tariff__button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("business-tariff--modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("business-tariff--modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("business-tariff--modal-show")) {
      popup.classList.remove("business-tariff--modal-show");
    }
  }
});
