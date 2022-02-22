import { cardsPopup, openPopup, closePopup } from './modal.js';

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

// КАРТОЧКИ ИЗ КОРОБКИ
const initialCards = [
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1631603296585-8e7e9a7a8f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    name: 'Офис',
    link: 'https://images.unsplash.com/photo-1631607359300-59830a31c76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    name: 'Дача',
    link: 'https://images.unsplash.com/photo-1632112539492-203b5002ff05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
  },
  {
    name: 'Капотня',
    link: 'https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'На райончике',
    link: 'https://images.unsplash.com/photo-1516144935500-ecacf0e53552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80',
  },
  {
    name: 'Холмогорский район',
    link: 'https://images.unsplash.com/photo-1635243541748-ec8ed7063ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];

/* ---------------------------------------------------------------------------- */

function createCard(item) {
  const listElement = templateElement
    .querySelector('.elements__list-item')
    .cloneNode(true);
  const elementsPhoto = listElement.querySelector('.elements__list-photo');

  // добавляем данные из аргумента
  listElement.querySelector('.elements__description').textContent = item.name;
  elementsPhoto.src = item.link;
  elementsPhoto.alt = item.name;

  //обработчик на лайк
  listElement
    .querySelector('.elements__like-btn')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like-btn_active');
    });

  //обработчик на удаление карточки
  listElement
    .querySelector('.elements__button-delete')
    .addEventListener('click', (evt) => {
      evt.target.closest('.elements__list-item').remove();
    });

  //обработчик на карточку для открытия картинки
  elementsPhoto.addEventListener('click', () => {
    image.src = item.link;
    image.alt = item.name;
    imageCaption.textContent = item.name;

    openPopup(popupImg);
  });
  return listElement; //вернул готовую карточку через return
}

// функция добавления карточку на страницу
function addCard(item, container) {
  const newCard = createCard(item);
  container.prepend(newCard);
}

// Карточки из коробки
initialCards.forEach(function (item) {
  addCard(item, templateList);
});

/*Создание новой карточки*/
const handlerCardFormSubmit = (evt, item) => {
  evt.preventDefault();
  addCard(
    (item = { name: titleInput.value, link: linkInput.value }),
    templateList
  );
  closePopup(cardsPopup);
  formAddNewCard.reset();
  saveBtnCard.classList.add('popup__save-btn_inactive');
  saveBtnCard.setAttribute('disabled', true);
};
formAddNewCard.addEventListener('submit', handlerCardFormSubmit);

export { createCard };
