import { cardsPopup, openPopup, closePopup } from './modal.js';
import { getUserInfo, getCards, addCard, errorHandler } from './api.js';

import { userId } from '../pages/index.js';

// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');
const templateElement = document.querySelector('.template').content; //клонировать разметку

// const formAddNewCard = cardsPopup.querySelector('.popup__form');
const formAddNewCard = cardsPopup.querySelector('.popup__form-card');
const image = document.querySelector('.popup_image-photo');
const imageCaption = document.querySelector('.popup_image-caption');
const popupImg = document.querySelector('.popup_image');
const titleInput = document.querySelector('.popup__input-title'); // переменная названия картинки
const linkInput = document.querySelector('.popup__input-link'); // переменная ссылки картинки
const saveBtnCard = document.querySelector('.popup__save-btn_add_card');

const createCard = ({ name, link, likes, cardId, ownerId }) => {
  const listElement = templateElement
    .querySelector('.elements__list-item')
    .cloneNode(true);
  const elementsPhoto = listElement.querySelector('.elements__list-photo');
  listElement.id = cardId;
  // добавляем данные из аргумента
  listElement.querySelector('.elements__description').textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

  const cardLikeCounter = listElement.querySelector('.elements__like-count');
  cardLikeCounter.textContent = likes.length.toString();

  // const cardId = cardData._id;
  // const cardOwnerId = cardData.owner._id;

  // const myLike = Boolean(likes.find((userData) => userData._id === userId));

  // console.log(myLike);

  //обработчик на лайк
  // listElement
  //   .querySelector('.elements__like-btn')
  //   .addEventListener('click', (evt) => {
  //     evt.target.classList.toggle('elements__like-btn_active');
  //   });

  //обработчик на удаление карточки
  // listElement
  //   .querySelector('.elements__button-delete')
  //   .addEventListener('click', (evt) => {
  //     evt.target.closest('.elements__list-item').remove();
  //   });

  //ОБРАБОТЧИК НА КАРТОЧКУ ДЛЯ ОТКРЫТИЯ КАРТИНКИ
  elementsPhoto.addEventListener('click', () => {
    image.src = link;
    image.alt = name;
    imageCaption.textContent = name;
    openPopup(popupImg);
  });
  return listElement; //вернул готовую карточку через return
};

const renderCard = (newCard, container) => {
  container.prepend(newCard);
};

/*СОЗДАНИЕ НОВОЙ КАРТОЧКИ*/
const handlerCardFormSubmit = (evt) => {
  evt.preventDefault();

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
      console.log(addCard);
      formAddNewCard.reset();
      saveBtnCard.classList.add('popup__save-btn_inactive');
      saveBtnCard.setAttribute('disabled', true);
    })
    .catch(errorHandler);
};
formAddNewCard.addEventListener('submit', handlerCardFormSubmit);

export { createCard, renderCard, templateList };
