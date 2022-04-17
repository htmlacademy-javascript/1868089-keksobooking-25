import {ALERT_SHOW_TIME} from './constant.js';

const getWordEnd = (number, form1, form2, form3) => {
  number = Math.abs(number) % 100;
  const number1 = number % 10;
  if (number > 10 && number < 20) {
    return form3;
  }
  if (number1 > 1 && number1 < 5) {
    return form2;
  }
  if (number1 === 1) {
    return form1;
  }
  return form3;
};

const getIsEscape = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  const style = alertContainer.style;
  style.zIndex = 100;
  style.position = 'absolute';
  style.width = '300px';
  style.right = '50%';
  style.transform = 'translateX(50%)';
  style.top = '55px';
  style.padding = '10px 3px';
  style.fontSize = '12px';
  style.textAlign = 'center';
  style.backgroundColor = '#ffaa99';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// Функция debounce - устранения дребезга
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getWordEnd,
  getIsEscape,
  showAlert,
  debounce,
};
