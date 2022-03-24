const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArray = (elements) => {
  const features = new Array(getRandomPositiveInteger(1, elements.length));
  for (let i = 0; i < features.length; i++) {features[i] = elements[i];}
  return features;
};

const AdsTypes = {
  PALACE: 'palace',
  FLAT: 'flat',
  HOUSE: 'house',
  BUNGALOW: 'bungalow',
  HOTEL: 'hotel',
};

const adTypesToReadable = {
  [AdsTypes.PALACE]: 'Дворец',
  [AdsTypes.FLAT]: 'Квартира',
  [AdsTypes.HOUSE]: 'Дом',
  [AdsTypes.BUNGALOW]: 'Бунгало',
  [AdsTypes.HOTEL]: 'Отель',
};

const adTypesToPrice = {
  [AdsTypes.PALACE]: '10000',
  [AdsTypes.FLAT]: '1000',
  [AdsTypes.HOUSE]: '5000',
  [AdsTypes.BUNGALOW]: '0',
  [AdsTypes.HOTEL]: '30000',
};

const ADS_TITLES = [
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

const ADS_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ADS_DISCRIPTIONS = [
  'Теплая цветовая гамма',
  'Номер с видом на море',
  'Номер в стиле Хай-Тек',
  'Президентские апартаменты',
];

const ADS_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAutor = (avatarNumber) => ({
  avatar : 'img/avatars/user${avatarNumber}.png'
});

const createOffer = (lat, lng) => ({
  title: getRandomArrayElement(ADS_TITLES),
  address: `${lat} ${lng}`,
  type: getRandomArrayElement(Object.values(AdsTypes)),
  rooms: getRandomPositiveInteger(1, 5),
  guests: getRandomPositiveInteger(1, 10),
  checkin: getRandomArrayElement(CHECK_IN),
  checkout: getRandomArrayElement(CHECK_OUT),
  features: getRandomArray(ADS_FEATURES),
  description: getRandomArrayElement(ADS_DISCRIPTIONS),
  photos: getRandomArray(ADS_PHOTOS),
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
