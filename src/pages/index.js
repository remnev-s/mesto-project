import './index.css';
import { enableValidation } from '../components/validate.js';
import { createCard } from '../components/card.js';

/* ---------------------------------------------------------------------------- */

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});
