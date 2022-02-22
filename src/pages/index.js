import './index.css';
import { enableValidation } from '../components/validate.js';
import { createCard } from '../components/card.js';

/* ---------------------------------------------------------------------------- */
import { getUserInfo, getCards } from '../components/api.js';

const getAppInfo = () => {
  return Promise.all([getUserInfo(), getCards()]);
};

getAppInfo()
  .then(([getUserInfo, getCards]) => {
    // Теперь у нас одновременно есть данные ответов user и cards
  })
  .catch((err) => console.log(err));

// Promise.all([getUserInfo(), getCards()]);
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});
