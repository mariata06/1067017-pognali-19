var button = document.querySelector(".new-destinations__country-button--open");

var popup = document.querySelector(".alphabet-country-block");

var close = popup.querySelector(".new-destinations__country-button--close");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("new-destinations__alphabet-country-block--modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("new-destinations__alphabet-country-block--modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("new-destinations__alphabet-country-block--modal-show")) {
      popup.classList.remove("new-destinations__alphabet-country-block--modal-show");
    }
  }
});
