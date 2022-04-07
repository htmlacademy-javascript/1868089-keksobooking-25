import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArray} from './random.js..js';

const TITLE_OF_PLACEMENT = [
  'Настоящий рай для любителей дайвинга',
  'Лучший коралловый пляж',
  'В 4 минутах ходьбы от парка Дзисси',
  'Великолепный вид на озеро',
  'В самом сердце старого центра города Ньон',
];

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURE_OF_PLACEMENT = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION_OF_PLACEMENT = [
  'Теплая цветовая гамма',
  'Номер с видом на море',
  'Номер в стиле Хай-Тек',
  'Президентские апартаменты',
];

const PHOTO_OF_PLACEMENT = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAutor = (avatarId) => ({
  avatar: `img/avatars/user${avatarId}.png`,
});

const createOffer = (lat, lng) => ({
  title: getRandomArrayElement(TITLE_OF_PLACEMENT),
  address: `${lat}, ${lng}`,
  type: getRandomArrayElement(Object.values(AdvertType)),
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 10),
  checkin: getRandomArrayElement(CHECK_IN),
  checkout: getRandomArrayElement(CHECK_OUT),
  features: getRandomArray(FEATURE_OF_PLACEMENT),
  description: getRandomArrayElement(DESCRIPTION_OF_PLACEMENT),
  photos: getRandomArray(PHOTO_OF_PLACEMENT),
});

const createLocation = (lat, lng) => ({
  lat,
  lng,
});

const createAd = (avatarNumber) => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return {
    author: createAutor(avatarNumber),
    location: createLocation(lat, lng),
    offer: createOffer(lat, lng),
  };
};

const createAds = (count) => {
  const ads = Array.from({length: count} , (ad, i) => {
    const avatarNumber = (i + 1 < 10) ? `0${i + 1}` : `${i + 1}`;
    ad = createAd(avatarNumber);
    return ad;
  });
  return ads;
};

export {createAds};
