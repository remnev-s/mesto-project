const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort7/',
  headers: {
    authorization: 'a794a2ca-2fdb-43bd-a4a4-85b3c1a8c71e',
    'Content-Type': 'application/json',
  },
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const handleError = (err) => {
  console.log(err);
};

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(getResponseData);
};

const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(getResponseData);
};

// КАРТОЧКА
const addCard = (newCard) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link,
    }),
  }).then(getResponseData);
};

// УДАЛЕНИЕ КАРТОЧКИ
const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then(getResponseData);
};

// АВАТАР
const updateImage = (newAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: newAvatar,
    }),
  }).then(getResponseData);
};

/* ДАННЫЕ ПОЛЬЗОВАТЕЛЯ */
const changeUserData = (newUserInfo) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: newUserInfo.name,
      about: newUserInfo.about,
    }),
  }).then(getResponseData);
};

/* ДОБАВЛЕНИЕ ЛАЙКА */
const putLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  }).then(getResponseData);
};

/* УДАЛЕНИЕ ЛАЙКА */
const deleteLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then(getResponseData);
};

export {
  getUserInfo,
  getCards,
  updateImage,
  handleError,
  changeUserData,
  addCard,
  deleteCard,
  //
  putLikeCard,
  deleteLikeCard,
};
