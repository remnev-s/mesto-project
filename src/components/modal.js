const popups = document.querySelectorAll('.popup');
const infoEdit = document.querySelector('.info__edit-btn');
const infoPopup = document.querySelector('.popup');
const infoPopupClose = document.querySelector('.popup__close-btn');
const cardsPopupOpen = document.querySelector('.profile__add-btn');
const cardsPopupClose = document.querySelector('.popup__close-btn_add_card');
const imagePopupClose = document.querySelector(
  '.popup__close-btn_image_fullsize'
);
const cardsPopup = document.querySelector('.popup-cards');
const popupImg = document.querySelector('.popup_image');

const avatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.popup_avatar');
const avatarPopupClose = document.querySelector('.popup__close-btn_add_avatar');

const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');
const infoName = document.querySelector('.info__name');
const infoDescription = document.querySelector('.info__description');

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openPopup(popups) {
  popups.classList.add('popup_opened');
  window.addEventListener('keydown', closeByEscape);
}
// ФУНКЦИЯ ЗАРЫТИЯ ПОПАПА
function closePopup(popups) {
  popups.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeByEscape);
}

popups.forEach((item) => {
  item.addEventListener('click', closeOverlayClick);
});
function closeOverlayClick(evt) {
  if (evt.type === 'click') {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); //нашли открытый попап
    closePopup(openedPopup); //закрыли попап
  }
}

//АВАТАР ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА
avatar.addEventListener('click', () => {
  console.log('click');
  openPopup(avatarPopup);
});
avatarPopupClose.addEventListener('click', () => {
  closePopup(avatarPopup);
});
// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoEdit.addEventListener('click', function () {
  nameInput.value = infoName.textContent;
  jobInput.value = infoDescription.textContent;
  openPopup(infoPopup);
});
infoPopupClose.addEventListener('click', function () {
  closePopup(infoPopup);
});

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК НА СТРАНИЦУ
cardsPopupOpen.addEventListener('click', function () {
  openPopup(cardsPopup);
});
cardsPopupClose.addEventListener('click', function () {
  closePopup(cardsPopup);
});

// ОБРАБОТЧИК ЗАКРЫТИЯ КАРТИНОК
imagePopupClose.addEventListener('click', function () {
  closePopup(popupImg);
});

export {
  openPopup,
  closePopup,
  infoPopup,
  popups,
  infoEdit,
  infoPopupClose,
  cardsPopupOpen,
  cardsPopupClose,
  imagePopupClose,
  cardsPopup,
  nameInput,
  jobInput,
  infoName,
  infoDescription,
};
