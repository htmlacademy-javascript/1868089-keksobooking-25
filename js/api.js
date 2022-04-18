import {ApiUrl} from './constant.js';

const getAds = async (onError) => {
  let response;
  try {
    response = await fetch(
      ApiUrl.GET,
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    );
  }
  catch (err) {
    onError();
    return [];
  }

  const allAds = await response.json();
  return allAds;
};

const sendData = (body, reset, onSuccess, onError) => {
  fetch(
    ApiUrl.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        reset();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getAds, sendData};
