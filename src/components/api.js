const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6/',
  headers: {
    authorization: '26241a74-b60b-456a-8bd5-fd0d2583c71d',
    'Content-Type': 'application/json',
  },
};

export const setSomeData = (data) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data),
  }).then((res) => getResponseData(res));
};

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
