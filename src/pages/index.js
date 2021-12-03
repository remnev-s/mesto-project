import './index.css';
import { enableValidation } from '../components/validate.js';
import {
  createCard,
  handlerCardFormSubmit,
  popupSaveBtn,
} from '../components/card.js';
import {
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
} from '../components/modal.js';

// ПЕРЕМЕННЫЕ ДЛЯ ПОПАПА ОТКРЫТИЯ КАРТИНОК
const popupImg = document.querySelector('.popup_image');

// ПЕРЕМЕННЫ ДЛЯ ФОРМ
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');
const infoName = document.querySelector('.info__name');
const infoDescription = document.querySelector('.info__description');
const saveBtnCard = document.querySelector('.popup__save-btn_add_card'); // кнопка создать

/* ---------------------------------------------------------------------------- */
const titleInput = document.querySelector('.popup__input-title'); // переменная названия картинки
const linkInput = document.querySelector('.popup__input-link'); // переменная ссылки картинки

// ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function getFormSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  infoName.textContent = nameInput.value;
  infoDescription.textContent = jobInput.value;
  closePopup(infoPopup);
  formElement.reset();
  popupSaveBtn.classList.add('popup__save-btn_inactive');
  popupSaveBtn.setAttribute('disabled', true);
}
formElement.addEventListener('submit', getFormSubmitHandler);
/* ---------------------------------------------------------------------------- */

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});
