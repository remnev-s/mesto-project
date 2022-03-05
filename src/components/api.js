const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6/',
  headers: {
    authorization: '26241a74-b60b-456a-8bd5-fd0d2583c71d',
    'Content-Type': 'application/json',
  },
};

// const getResponseData = (res) => {
//   return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
// };

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

const errorHandler = (err) => {
  console.log(err);
};

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    // method: 'GET',
    headers: config.headers,
    // }).then(getResponseData);
  }).then((res) => getResponseData(res));
};

const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    // method: 'GET',
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

// АВАТАР
const updateImage = (newAvatar) => {
  return (
    fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        avatar: newAvatar,
      }),
    })
      // }).then(getResponseData);
      .then((res) => {
        if (res.ok) {
          return newAvatar;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  );
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
    // }).then(getResponseData);
  }).then((res) => {
    if (res.ok) {
      return newUserInfo;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
export {
  getUserInfo,
  getCards,
  updateImage,
  errorHandler,
  changeUserData,
  addCard,
};
