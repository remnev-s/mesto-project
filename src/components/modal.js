import { updateImage, errorHandler, changeUserData } from './api.js';
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

// const nameInput = document.querySelector('.popup__input-name');
// const jobInput = document.querySelector('.popup__input-about');
// const infoName = document.querySelector('.info__name');
// const infoDescription = document.querySelector('.info__description');

const popupSaveBtn = document.querySelector('.popup__save-btn');
const formElement = document.querySelector('.popup__form');

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
const openPopup = (popups) => {
  popups.classList.add('popup_opened');
  window.addEventListener('keydown', closeByEscape);
};
// ФУНКЦИЯ ЗАРЫТИЯ ПОПАПА
const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  window.removeEventListener('keydown', closeByEscape);
};

const closeOverlayClick = (evt) => {
  if (evt.type === 'click') {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }
};

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); //нашли открытый попап
    closePopup(openedPopup); //закрыли попап
  }
};

popups.forEach((item) => {
  item.addEventListener('click', closeOverlayClick);
});

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК НА СТРАНИЦУ
cardsPopupOpen.addEventListener('click', () => {
  openPopup(cardsPopup);
});
cardsPopupClose.addEventListener('click', () => {
  closePopup(cardsPopup);
});

// ОБРАБОТЧИК ЗАКРЫТИЯ КАРТИНОК
imagePopupClose.addEventListener('click', () => {
  closePopup(popupImg);
});
/* -------------------------------------------------- */
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');

const infoName = document.querySelector('.info__name');
const infoDescription = document.querySelector('.info__description');

// ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ — ИМЯ И ДЕЯТЕЛЬНОСТЬ
const formPopupProfile = document.querySelector('.popup__form-profile');
const getFormSubmitHandler = (evt) => {
  evt.preventDefault();
  // infoName.textContent = nameInput.value;
  // infoDescription.textContent = jobInput.value;

  const newUserInfo = {
    name: nameInput.value,
    about: jobInput.value,
  };

  changeUserData(newUserInfo)
    .then((newUserInfo) => {
      infoName.textContent = newUserInfo.name;
      infoDescription.textContent = newUserInfo.about;
      closePopup(infoPopup);
      formElement.reset();
      popupSaveBtn.classList.add('popup__save-btn_inactive');
      popupSaveBtn.setAttribute('disabled', true);
    })

    .catch(errorHandler);
};
formPopupProfile.addEventListener('submit', getFormSubmitHandler);

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoEdit.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  jobInput.value = infoDescription.textContent;
  openPopup(infoPopup);
});

infoPopupClose.addEventListener('click', () => {
  closePopup(infoPopup);
});

/* ——————————————————————————————————————————————————————————— */
/* ——————————————————————————————————————————————————————————— */
const formPopupAvatar = document.querySelector('.popup__form-avatar');
const popupInputAvatar = document.querySelector('.popup__input-avatar');
const avatarImage = document.querySelector('.profile__avatar-img');
//АВАТАР ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА
avatar.addEventListener('click', () => {
  openPopup(avatarPopup);
});
avatarPopupClose.addEventListener('click', () => {
  closePopup(avatarPopup);
});

//АВАТАР
const getFormSubmit = (evt) => {
  evt.preventDefault();
  updateImage(popupInputAvatar.value)
    .then((newAvatar) => {
      avatarImage.src = newAvatar;
      closePopup(avatarPopup);
      formPopupAvatar.reset();
      popupSubmitAvatar.classList.add('popup__save-btn_inactive');
      popupSubmitAvatar.setAttribute('disabled', true);
    })
    .catch(errorHandler);
};
formPopupAvatar.addEventListener('submit', getFormSubmit);

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
  avatarImage,
};
