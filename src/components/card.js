import { cardsPopup, openPopup, closePopup } from './modal.js';
import { getUserInfo, getCards } from '../components/api.js';

// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');
const templateElement = document.querySelector('.template').content; //клонировать разметку

const formAddNewCard = cardsPopup.querySelector('.popup__form');
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
  // listElement.id = cardId;
  // добавляем данные из аргумента
  listElement.querySelector('.elements__description').textContent = name;
  elementsPhoto.src = link;
  elementsPhoto.alt = name;

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

  //обработчик на карточку для открытия картинки
  //   elementsPhoto.addEventListener('click', () => {
  //     image.src = item.link;
  //     image.alt = item.name;
  //     imageCaption.textContent = item.name;
  //
  //     openPopup(popupImg);
  //   });
  return listElement; //вернул готовую карточку через return
};

const addCard = (newCard, container) => {
  container.prepend(newCard);
};
// функция добавления карточку на страницу
// function addCard(item, container) {
//   const newCard = createCard(item);
//   container.prepend(newCard);
// }
//
// // Карточки из коробки
// initialCards.forEach(function (item) {
//   addCard(item, templateList);
// });

/*СОЗДАНИЕ НОВОЙ КАРТОЧКИ*/
const handlerCardFormSubmit = (evt, item) => {
  evt.preventDefault();
  // addCard(
  //   (item = { name: titleInput.value, link: linkInput.value }),
  //   templateList
  // );
  closePopup(cardsPopup);
  formAddNewCard.reset();
  saveBtnCard.classList.add('popup__save-btn_inactive');
  saveBtnCard.setAttribute('disabled', true);
};
formAddNewCard.addEventListener('submit', handlerCardFormSubmit);

export { createCard, addCard, templateList };
