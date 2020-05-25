var button = document.querySelector(".hobby-block__open");

var hobbyCheckbox = document.querySelector(".hobby-block__container-checkbox");

//var close = popup.querySelector(".business-tariff__button");

var buttonSvg = document.querySelector(".hobby-block__open-svg");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonSvg.classList.add("hobby-block__open-svg--open");
  hobbyCheckbox.classList.add("hobby-block__container-checkbox--show");
  buttonSvg.classList.remove("hobby-block__open-svg--open");
  hobbyCheckbox.classList.remove("hobby-block__container-checkbox--show");
});
/*
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("business-tariff--modal-show");
});
*/
