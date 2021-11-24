const infoPopup = document.querySelector('.popup');
const infoPopupClose = document.querySelector('.popup__close-btn');
const infoEdit = document.querySelector('.info__edit-btn');

const cardsPopupOpen = document.querySelector('.profile__add-btn');
const cardsPopupClose = document.querySelector('.popup__close-btn_add_card');
const cardsPopup = document.querySelector('.popup-cards');

// ПЕРЕМЕННЫЕ ДЛЯ ПОПАПА ОТКРЫТИЯ КАРТИНОК
const popupImg = document.querySelector('.popup_image');
const image = document.querySelector('.popup_image-photo');
const imageCaption = document.querySelector('.popup_image-caption');
const imagePopupClose = document.querySelector(
  '.popup__close-btn_image_fullsize'
);
// ПЕРЕМЕННЫ ДЛЯ ФОРМ
const popup = document.querySelectorAll('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');
const infoName = document.querySelector('.info__name');
const infoDescription = document.querySelector('.info__description');
const saveBtn = document.querySelector('.popup__save-btn');
const saveBtnCard = document.querySelector('.popup__save-btn_add_card'); // кнопка создать
/* ---------------------------------------------------------------------------- */
const formAddNewCard = cardsPopup.querySelector('.popup__form');
const titleInput = document.querySelector('.popup__input-title'); // переменная названия картинки
const linkInput = document.querySelector('.popup__input-link'); // переменная ссылки картинки

// КОНТЕЙНЕР ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
const templateList = document.querySelector('.elements__list');
const templateElement = document.querySelector('.template').content; //клонировать разметку

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА РЕДАКТИРОВАНИЯ ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ
infoEdit.addEventListener('click', function () {
  openPopup(infoPopup);
});
infoPopupClose.addEventListener('click', function () {
  closePopup(infoPopup);
});
/* ---------------------------------------------------------------------------- */

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// ФУНКЦИЯ ЗАРЫТИЯ ПОПАПА
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК НА СТРАНИЦУ
cardsPopupOpen.addEventListener('click', function () {
  openPopup(cardsPopup);
});
cardsPopupClose.addEventListener('click', function () {
  closePopup(cardsPopup);
});
/* ---------------------------------------------------------------------------- */

//Закрываем попапы на область вокруг попапа
popup.forEach((item) => {
  item.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      item.classList.remove('popup_opened');
    }
  });
});
//Закрываем попапы на ESCATE
popup.forEach((item) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      item.classList.remove('popup_opened');
    }
  });
});
/* ---------------------------------------------------------------------------- */
// ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  infoName.textContent = nameInput.value;
  infoDescription.textContent = jobInput.value;

  closePopup(infoPopup);
}
formElement.addEventListener('submit', formSubmitHandler);
/* ---------------------------------------------------------------------------- */

/* --------------ADD CARDS PAGE----------------------------- */
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
  const elementsDescription = listElement.querySelector(
    '.elements__description'
  );
  // добавляем данные из аргумента
  elementsPhoto.src = item.link;
  elementsPhoto.alt = item.name;
  elementsDescription.textContent = item.name;

  //обработчик на лайк
  listElement
    .querySelector('.elements__like-btn')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like-btn_active');
    });

  //обработчик на удаление карточки
  listElement
    .querySelector('.elements__button-delete')
    .addEventListener('click', function (evt) {
      evt.target.closest('.elements__list-item').remove();
    });

  //обработчик на карточку для открытия картинки
  elementsPhoto.addEventListener('click', function () {
    image.src = item.link;
    image.alt = item.name;
    imageCaption.textContent = item.name;

    openPopup(popupImg);
  });
  return listElement; //вернул готовую карточку через return
}
// обработчик закрытия картинок
imagePopupClose.addEventListener('click', function () {
  closePopup(popupImg);
});

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
function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  addCard(
    (item = { name: titleInput.value, link: linkInput.value }),
    templateList
  );
  document.querySelector('.popup__form').reset();
  closePopup(cardsPopup);
}
formAddNewCard.addEventListener('submit', cardFormSubmitHandler);
