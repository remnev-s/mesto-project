import { updateImage, errorHandler, changeUserData } from './api.js';
import { deletePost } from './card.js';

const popups = document.querySelectorAll('.popup');
const infoPopup = document.querySelector('.popup');
const infoUserEdit = document.querySelector('.info__edit-btn');

const cardsPopup = document.querySelector('.cards-popup');
const cardsPopupOpen = document.querySelector('.profile__add-btn');

const avatar = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.avatar-popup');

const profileForm = document.querySelector('.popup__form');
const profileFormPopup = document.querySelector('.popup__form-profile');
const profileSubmitBtn = profileFormPopup.querySelector('.popup__submit');

const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');
const infoName = document.querySelector('.info__name');
const infoDescription = document.querySelector('.info__description');

const formDeleteCard = document.querySelector('.popup__form-delete-card');
const popupSubmitDeleteAvatar = formDeleteCard.querySelector('.popup__submit');
const popupDeleteCard = document.querySelector('.card-delete-popup');

const formPopupAvatar = document.querySelector('.popup__form-avatar');
const popupInputAvatar = document.querySelector('.popup__input-avatar');
const avatarImage = document.querySelector('.profile__avatar-img');
const popupSubmitAvatar = formPopupAvatar.querySelector('.popup__submit');

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

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); //нашли открытый попап
    closePopup(openedPopup); //закрыли попап
  }
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  });
});

cardsPopupOpen.addEventListener('click', () => {
  openPopup(cardsPopup);
});
avatar.addEventListener('click', () => {
  openPopup(avatarPopup);
});

// ОТКРЫТИЕ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoUserEdit.addEventListener('click', () => {
  nameInput.value = infoName.textContent;
  jobInput.value = infoDescription.textContent;
  openPopup(infoPopup);
});

const setButtonState = (button, isSending) => {
  button.disabled = isSending;
  button.textContent = isSending ? 'Cохранение...' : 'Сохранить';
};

const disableButton = (item) => {
  item.classList.add('popup__save-btn_inactive');
  item.setAttribute('disabled', true);
};

// ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ — ИМЯ И ДЕЯТЕЛЬНОСТЬ
const submitProfileInfo = (evt) => {
  evt.preventDefault();
  setButtonState(profileSubmitBtn, true);
  const newUserInfo = {
    name: nameInput.value,
    about: jobInput.value,
  };
  changeUserData(newUserInfo)
    .then((newUserInfo) => {
      infoName.textContent = newUserInfo.name;
      infoDescription.textContent = newUserInfo.about;
      closePopup(infoPopup);
      profileForm.reset();
      disableButton(profileSubmitBtn);
    })
    .catch(errorHandler)
    .finally(() => {
      setButtonState(profileSubmitBtn, false);
    });
};
profileFormPopup.addEventListener('submit', submitProfileInfo);

//АВАТАР
const submitAvatar = (evt) => {
  evt.preventDefault();
  setButtonState(popupSubmitAvatar, true);
  updateImage(popupInputAvatar.value)
    .then((newAvatar) => {
      avatarImage.src = newAvatar;
      closePopup(avatarPopup);
      formPopupAvatar.reset();
      disableButton(popupSubmitAvatar);
    })
    .catch(errorHandler)
    .finally(() => {
      setButtonState(popupSubmitAvatar, false);
    });
};
formPopupAvatar.addEventListener('submit', submitAvatar);

let dataForPopup;
const saveDataForPopup = (data) => {
  dataForPopup = data;
};

const changeTextSubmit = (buttonElement, text) => {
  buttonElement.textContent = text;
};
const submitFormDeleteCard = (evt) => {
  evt.preventDefault();
  changeTextSubmit(popupSubmitDeleteAvatar, 'Удаление...');
  deletePost(dataForPopup)
    .then(() => {
      closePopup(popupDeleteCard);
    })
    .catch(errorHandler)
    .finally(() => {
      changeTextSubmit(popupSubmitDeleteAvatar, 'Да');
    });
};
popupDeleteCard.addEventListener('submit', submitFormDeleteCard);

export {
  openPopup,
  closePopup,
  infoPopup,
  cardsPopup,
  popupDeleteCard,
  //
  infoName,
  infoDescription,
  avatarImage,
  //
  saveDataForPopup,
  setButtonState,
  disableButton,
};
