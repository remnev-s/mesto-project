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
  formElement.classList.remove("popup__save-btn");
});
formElement.addEventListener("submit", formSubmitHandler);

/* --------------POPUP CARDS----------------------------- */
const cardsPopupOpen = document.querySelector(".profile__add-btn");
const cardsPopupClose = document.querySelector(".popup-cards__close-btn");
const cardsPopup = document.querySelector(".popup-cards");

cardsPopupOpen.addEventListener("click", function () {
  cardsPopup.classList.add("popup_opened");
});

cardsPopupClose.addEventListener("click", function () {
  cardsPopup.classList.remove("popup_opened");
});

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

// Просто добавляет карточку на страницу
/*  const templateElement = document.querySelector(".template").content;
const templateList = document.querySelector(".elements__list");
const listElement = templateElement
  .querySelector(".elements__list-item")
  .cloneNode(true);
listElement.querySelector(".elements__list-photo").src =
  "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg";
listElement.querySelector(".elements__description").textContent = "Текст тут";
templateList.prepend(listElement);
*/

/* ---------------------------------------------------------------------------- */

/*
initialCards.forEach(function (item) {

})
function createCard(item) {
  const templateElement = document.querySelector(".template").content; //клонировать разметку
  const templateList = document.querySelector(".elements__list");
  const listElement = templateElement
    .querySelector(".elements__list-item")
    .cloneNode(true);

  //добавить данные в нее из аргумента

  listElement
    .querySelector(".element__like-btn")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like-btn_active");
    }); // добавить обработчик на кнопку лайка

  // добавить обработчик на кнопку удаления
  // добавить обработчик на карточку для открытия попапа

  return item;
}

function addCard(item, listElement) {
  // функция принимает два аргумента - данные карточки и ссылку на контейнер куда надо добавить карточку

  // внутри себя создает карточку через createCard
  // полученную карточку сохраняет в переменную

  templateList.prepend(listElement); //добавляет ее в тот контейнер, ссылку на которую ты передаешь вторым аргументом
}

*/

const formAddNewCard = cardsPopup.querySelector(".popup__form");

const titleInput = document.querySelector(".popup__input-title"); // переменная названия картинки
const linkInput = document.querySelector(".popup__input-link"); // переменная ссылки картинки

/*Контейнер для добавления карточек*/
const templateList = document.querySelector(".elements__list");
const templateElement = document.querySelector(".template").content; //клонировать разметку

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
      console.log("yopta");
      evt.target.closest(".elements__list-item").remove();
    });

  //обработчик на карточку для открытия картинки
  return listElement; //вернул готовую карточку через return
}

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
function addForm(evt) {
  evt.preventDefault();
  addCard(
    (item = { name: titleInput.value, link: linkInput.value }),
    templateList
  );
  // );
}

formAddNewCard.addEventListener("submit", addForm);
