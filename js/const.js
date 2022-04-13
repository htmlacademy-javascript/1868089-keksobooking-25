const Messages = {
  GET_NO_ADVERT: 'Не удалось получить данные с сервера :(',
  FIND_NO_ADVERT: 'Не удалось найти подходящие объявления',
};

const ServerUrl = {
  GET_URL: 'https://25.javascript.pages.academy/keksobooking/data',
  POST_URL: 'https://25.javascript.pages.academy/keksobooking',
};

const DEFAULT_VALUE = 'any';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const COUNT_OF_ADVERTS = 10;
const MAP_ZOOM = 13;
const RERENDER_DELAY = 500;
const NUMBER_AFTER_POINT = 5;
const MAX_PRICE_FOR_NIGHT = 100000;
const PRICE_STEP = 100;

const AdvertsType = {
  PALACE: 'palace',
  FLAT: 'flat',
  HOUSE: 'house',
  BUNGALOW: 'bungalow',
  HOTEL: 'hotel',
  ANY: 'any',
};

const advertTypeEnToRu = {
  [AdvertsType.PALACE]: 'Дворец',
  [AdvertsType.FLAT]: 'Квартира',
  [AdvertsType.HOUSE]: 'Дом',
  [AdvertsType.BUNGALOW]: 'Бунгало',
  [AdvertsType.HOTEL]: 'Отель',
};

const adTypesToPrice = {
  [AdvertsType.PALACE]: 10000,
  [AdvertsType.FLAT]: 1000,
  [AdvertsType.HOUSE]: 5000,
  [AdvertsType.BUNGALOW]: 0,
  [AdvertsType.HOTEL]: 3000,
};

const MAIN_LOCATION = {
  lat: 35.675178,
  lng: 139.748876,
};

const PRICE_RANGES = {
  any: {
    minprice : 0,
    maxprice : 100000,
  },
  middle: {
    minprice : 10001,
    maxprice : 50000,
  },
  low: {
    minprice : 0,
    maxprice : 10000,
  },
  high: {
    minprice : 50001,
    maxprice : 100000,
  },
};

const ROOM_GUEST_OPTION = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

export {
  ServerUrl,
  Messages,
  AdvertsType,
  advertTypeEnToRu,
  adTypesToPrice,
  FILE_TYPES,
  COUNT_OF_ADVERTS,
  MAP_ZOOM,
  RERENDER_DELAY,
  MAIN_LOCATION,
  NUMBER_AFTER_POINT,
  MAX_PRICE_FOR_NIGHT,
  PRICE_STEP,
  PRICE_RANGES,
  DEFAULT_VALUE,
  ROOM_GUEST_OPTION
};

