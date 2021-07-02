const infoPopup = document.querySelector(".popup");
const infoPopupClose = document.querySelector(".popup__close-btn");
const infoEdit = document.querySelector(".info__edit-btn");

infoEdit.addEventListener("click", function () {
  infoPopup.classList.add("popup_opened");
});

infoPopupClose.addEventListener("click", function () {
  infoPopup.classList.remove("popup_opened");
});

/* --------------FORM EDIT----------------------------- */
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-about");
const infoName = document.querySelector(".info__name");
const infoDescription = document.querySelector(".info__description");

const saveBtn = document.querySelector(".popup__save-btn");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  infoName.textContent = nameInput.value;
  infoDescription.textContent = jobInput.value;

  infoPopup.classList.toggle("popup_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

saveBtn.addEventListener("click", function () {
  console.log("save yopta");
  formElement.classList.remove("popup__save-btn");
});

formElement.addEventListener("submit", formSubmitHandler);

/* ------------------------------------------- */


/* --------------POPUP CARDS----------------------------- */
const cardsPopupOpen = document.querySelector(".profile__add-btn");
const cardsPopup = document.querySelector(".popup-cards");
const cardsPopupClose = document.querySelector(".popup-cards__close-btn");

cardsPopupOpen.addEventListener("click", function () {
  console.log("ya");
  cardsPopup.classList.add("popup_opened");
});

cardsPopupClose.addEventListener("click", function () {
  cardsPopup.classList.remove("popup_opened");
});

/* ------------------------------------------- */
