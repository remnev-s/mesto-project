const infoPopup = document.querySelector(".popup");
const infoPopupClose = document.querySelector(".popup__close-btn");
const infoEdit = document.querySelector(".info__edit-btn");

const cardsPopupOpen = document.querySelector(".profile__add-btn");
const cardsPopupClose = document.querySelector(".popup__close-btn_add_card");
const cardsPopup = document.querySelector(".popup-cards");

// ПЕРЕМЕННЫЕ ДЛЯ ПОПАПА ОТКРЫТИЯ КАРТИНОК
const popupImg = document.querySelector(".popup_image");
const image = document.querySelector(".popup_image-photo");
const imageCaption = document.querySelector(".popup_image-caption");
const imagePopupClose = document.querySelector(
  ".popup__close-btn_image_fullsize"
);
// ПЕРЕМЕННЫ ДЛЯ ФОРМ
const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-about");
const infoName = document.querySelector(".info__name");
const infoDescription = document.querySelector(".info__description");
const saveBtn = document.querySelector(".popup__save-btn");
const saveBtnCard = document.querySelector(".popup__save-btn_add_card");
/* ---------------------------------------------------------------------------- */
const formAddNewCard = cardsPopup.querySelector(".popup__form");
const titleInput = document.querySelector(".popup__input-title"); // переменная названия картинки
const linkInput = document.querySelector(".popup__input-link"); // переменная ссылки картинки

// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector(".elements__list");
const templateElement = document.querySelector(".template").content; //клонировать разметку

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoEdit.addEventListener("click", function () {
  openPopup(infoPopup);
});
infoPopupClose.addEventListener("click", function () {
  closePopup(infoPopup);
});
/* ---------------------------------------------------------------------------- */

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
// ФУНКЦИЯ ЗАРЫТИЯ ПОПАПА
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК НА СТРАНИЦУ
cardsPopupOpen.addEventListener("click", function () {
  openPopup(cardsPopup);
});
cardsPopupClose.addEventListener("click", function () {
  closePopup(cardsPopup);
});
/* ---------------------------------------------------------------------------- */

// ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  infoName.textContent = nameInput.value;
  infoDescription.textContent = jobInput.value;

  closePopup(infoPopup);
}
formElement.addEventListener("submit", formSubmitHandler);
/* ---------------------------------------------------------------------------- */

/* --------------ADD CARDS PAGE----------------------------- */
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

/* ---------------------------------------------------------------------------- */

function createCard(item) {
  const listElement = templateElement
    .querySelector(".elements__list-item")
    .cloneNode(true);

  const elementsPhoto = listElement.querySelector(".elements__list-photo");
  const elementsDescription = listElement.querySelector(
    ".elements__description"
  );
  // добавляем данные из аргумента
  elementsPhoto.src = item.link;
  elementsPhoto.alt = item.name;
  elementsDescription.textContent = item.name;

  //обработчик на лайк
  listElement
    .querySelector(".elements__like-btn")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like-btn_active");
    });

  //обработчик на удаление карточки
  listElement
    .querySelector(".elements__button-delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".elements__list-item").remove();
    });

  //обработчик на карточку для открытия картинки
  elementsPhoto.addEventListener("click", function () {
    image.src = item.link;
    image.alt = item.name;
    imageCaption.textContent = item.name;

    openPopup(popupImg);
  });
  return listElement; //вернул готовую карточку через return
}
// обработчик закрытия картинок
imagePopupClose.addEventListener("click", function () {
  closePopup(popupImg);
});

// функция добавления карточку на страницу
function addCard(item, container) {
  const newCard = createCard(item);
  container.prepend(newCard);
}

// Карточки из коробки
initialCards.forEach(function (item) {
  addCard(item, templateList);
});

/*Создание новой карточки*/
function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  addCard(
    (item = { name: titleInput.value, link: linkInput.value }),
    templateList
  );
  document.querySelector(".popup__form").reset();
  closePopup(cardsPopup);
}
formAddNewCard.addEventListener("submit", cardFormSubmitHandler);
