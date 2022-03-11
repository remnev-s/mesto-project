import './index.css';
import { enableValidation } from '../components/validate.js';
import { createCard, renderCard, templateList } from '../components/card.js';
import { infoName, infoDescription, avatarImage } from '../components/modal.js';

/* ---------------------------------------------------------------------------- */
import { getUserInfo, getCards, errorHandler } from '../components/api.js';

const getAppInfo = () => {
  return Promise.all([getUserInfo(), getCards()]);
};

getAppInfo()
  .then(([getUserInfo, getCards]) => {
    infoName.textContent = getUserInfo.name;
    infoDescription.textContent = getUserInfo.about;
    avatarImage.alt = getUserInfo.name;
    avatarImage.src = getUserInfo.avatar;
    userId = getUserInfo._id;

    getCards.reverse().forEach((getCards) => {
      const cardElement = createCard({
        ...getCards,
        cardId: getCards._id,
        ownerId: getCards.owner._id,
      });

      renderCard(cardElement, templateList);
    });
  })
  .catch(errorHandler);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});

export let userId;

export { getAppInfo };
