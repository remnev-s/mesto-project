const popup = document.querySelectorAll('.popup');
const infoEdit = document.querySelector('.info__edit-btn');
const infoPopup = document.querySelector('.popup');
const infoPopupClose = document.querySelector('.popup__close-btn');
const cardsPopupOpen = document.querySelector('.profile__add-btn');
const cardsPopupClose = document.querySelector('.popup__close-btn_add_card');
const imagePopupClose = document.querySelector(
  '.popup__close-btn_image_fullsize'
);
const cardsPopup = document.querySelector('.popup-cards');

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// ФУНКЦИЯ ЗАРЫТИЯ ПОПАПА
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Закрываем попапы на область вокруг попапа
popup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      item.classList.remove('popup_opened');
    }
  });
});
//Закрываем попапы на ESCATE
popup.forEach((item) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      item.classList.remove('popup_opened');
    }
  });
});

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoEdit.addEventListener('click', function () {
  openPopup(infoPopup);
});
infoPopupClose.addEventListener('click', function () {
  closePopup(infoPopup);
});
/* ---------------------------------------------------------------------------- */

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК НА СТРАНИЦУ
cardsPopupOpen.addEventListener('click', function () {
  openPopup(cardsPopup);
});
cardsPopupClose.addEventListener('click', function () {
  closePopup(cardsPopup);
});
/* ---------------------------------------------------------------------------- */
// ОБРАБОТЧИК ЗАКРЫТИЯ КАРТИНОК
imagePopupClose.addEventListener('click', function () {
  closePopup(popupImg);
});

export {
  openPopup,
  closePopup,
  popup,
  infoEdit,
  infoPopupClose,
  cardsPopupOpen,
  cardsPopupClose,
  imagePopupClose,
  cardsPopup,
  infoPopup,
};
