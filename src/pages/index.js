import './index.css';
import { enableValidation } from '../components/validate.js';
import { createCard, addCard, templateList } from '../components/card.js';
import { infoName, infoDescription, avatarImage } from '../components/modal.js';

/* ---------------------------------------------------------------------------- */
import { getUserInfo, getCards } from '../components/api.js';

const getAppInfo = () => {
  return Promise.all([getUserInfo(), getCards()]);
};

export let userId;
getAppInfo()
  .then(([getUserInfo, getCards]) => {
    infoName.textContent = getUserInfo.name;
    infoDescription.textContent = getUserInfo.about;
    avatarImage.alt = getUserInfo.name;
    avatarImage.src = getUserInfo.avatar;
    userId = getUserInfo._id;

    getCards.forEach((item) => {
      const {
        name,
        link,
        likes,
        _id: cardId,
        owner: { _id: ownerId },
      } = item;
      const newCard = createCard({ name, link, likes, cardId, ownerId });

      addCard(newCard, templateList);
      // console.log(addCard);
    });
  })
  .catch((err) => console.log(err));

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});
