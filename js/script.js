const infoPopup = document.querySelector(".popup");
const infoPopupClose = document.querySelector(".popup__close-btn");
const infoEdit = document.querySelector(".info__edit-btn");

infoEdit.addEventListener("click", function () {
  console.log("work");
  infoPopup.classList.add("popup_opened");
});

infoPopupClose.addEventListener("click", function () {
  infoPopup.classList.remove("popup_opened");
});
