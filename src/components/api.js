console.log('API');
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6/',
  headers: {
    authorization: '26241a74-b60b-456a-8bd5-fd0d2583c71d',
    'Content-Type': 'application/json',
  },
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    // method: 'GET',
    headers: config.headers,
  }).then(getResponseData);
};

const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    // method: 'GET',
    headers: config.headers,
  }).then(getResponseData);
};

export { getUserInfo, getCards };
