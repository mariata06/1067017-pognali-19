var button = document.querySelector(".new-destinations__country-button--plus");

var popup = document.querySelector(".alphabet-country-block");

var close = popup.querySelector(".new-destinations__country-button--close");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("alphabet-country-block--modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("alphabet-country-block--modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("alphabet-country-block--modal-show")) {
      popup.classList.remove("alphabet-country-block--modal-show");
    }
  }
});
