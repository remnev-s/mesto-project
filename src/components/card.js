import {
  cardsPopup,
  openPopup,
  closePopup,
  popupDeleteCard,
  saveDataForPopup,
  setButtonState,
  disableButton,
} from './modal.js';
import {
  getUserInfo,
  getCards,
  addCard,
  errorHandler,
  deleteCard,
  //
  putLikeCard,
  deleteLikeCard,
} from './api.js';

import { userId, getAppInfo } from '../pages/index.js';

// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');

const formAddNewCard = cardsPopup.querySelector('.popup__form-card');
const popupSubmitNewCard = formAddNewCard.querySelector('.popup__submit');

const image = document.querySelector('.image-popup__photo');
const imageCaption = document.querySelector('.image-popup__caption');
const popupImg = document.querySelector('.image-popup');
const titleInput = document.querySelector('.popup__input-title'); // переменная названия картинки
const linkInput = document.querySelector('.popup__input-link'); // переменная ссылки картинки
const saveBtnCard = document.querySelector('.popup__save-btn_add_card');

const createCard = ({ name, link, likes, cardId, ownerId }) => {
  const listElement = document
    .querySelector('.template')
    .content.querySelector('.elements__list-item')
    .cloneNode(true);

  const elementsPhoto = listElement.querySelector('.elements__list-photo');
  const cardLike = listElement.querySelector('.elements__like-btn');

  listElement.id = cardId;
  listElement.querySelector('.elements__description').textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

  const cardLikeCounter = listElement.querySelector('.elements__like-count');
  cardLikeCounter.textContent = likes.length.toString();

  const myLike = Boolean(likes.find((userData) => userData._id === userId));
  if (myLike) {
    cardLike.classList.add('elements__like-btn_active');
  }
  updateLikesPost(listElement, likes.length);
  cardLike.addEventListener('click', changeReactionPost);

  //ОБРАБОТЧИК НА УДАЛЕНИЕ КАРТОЧКИ
  if (ownerId === userId) {
    const deleteButton = listElement.querySelector('.elements__button-delete');
    deleteButton.classList.add('elements__button_inactive');
    deleteButton.addEventListener('click', (evt) => {
      openPopup(popupDeleteCard);
      saveDataForPopup(evt);
    });
  }

  //ОБРАБОТЧИК НА КАРТОЧКУ ДЛЯ ОТКРЫТИЯ КАРТИНКИ
  elementsPhoto.addEventListener('click', () => {
    image.src = link;
    image.alt = name;
    imageCaption.textContent = name;
    openPopup(popupImg);
  });
  return listElement;
};

const renderCard = (newCard, container) => {
  container.prepend(newCard);
};

/* ФУНКЦИЯ ПОСТАНОВКИ И УДАЛЕНИЯ ЛАЙКА */
const changeReactionPost = (evt) => {
  const likePost = evt.target.closest('.elements__list-item');
  const pressed = evt.target;

  if (pressed.classList.contains('elements__like-btn_active')) {
    deleteLikeCard(likePost.id)
      .then((res) => {
        pressed.classList.remove('elements__like-btn_active');
        updateLikesPost(likePost, res.likes.length);
      })
      .catch(errorHandler);
  } else {
    putLikeCard(likePost.id)
      .then((res) => {
        pressed.classList.add('elements__like-btn_active');
        updateLikesPost(likePost, res.likes.length);
      })
      .catch(errorHandler);
  }
};

const updateLikesPost = (list, countLikes) => {
  list.querySelector('.elements__like-count').textContent = countLikes;
};

const deletePost = (evt) => {
  const deletePost = evt.target.closest('.elements__list-item');

  return deleteCard(deletePost.id).then(() => {
    deletePost.remove();
  });
};

/*СОЗДАНИЕ НОВОЙ КАРТОЧКИ*/
const submitNewCard = (evt) => {
  evt.preventDefault();
  setButtonState(popupSubmitNewCard, true);
  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };
  addCard(newCard)
    .then((newCard) => {
      const {
        name,
        link,
        likes,
        _id: cardId,
        owner: { _id: ownerId },
      } = newCard;
      const newPost = createCard({ name, link, likes, cardId, ownerId });
      renderCard(newPost, templateList);
      closePopup(cardsPopup);
      formAddNewCard.reset();
      disableButton(saveBtnCard);
    })
    .catch(errorHandler)
    .finally(() => {
      setButtonState(popupSubmitNewCard, false);
    });
};
formAddNewCard.addEventListener('submit', submitNewCard);

export { createCard, renderCard, templateList, deletePost };
