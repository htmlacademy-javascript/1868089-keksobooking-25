const DEFAULT_VALUE = 'any';
const FILE_TYPE = ['gif', 'jpg', 'jpeg', 'png'];
const COUNT_OF_ADVERT = 10;
const MAP_ZOOM = 13;
const RERENDER_DELAY = 500;
const NUMBER_AFTER_POINT = 5;
const MAX_PRICE_FOR_NIGHT = 100000;
const PRICE_STEP = 100;

const AdvertType = {
  PALACE: 'palace',
  FLAT: 'flat',
  HOUSE: 'house',
  BUNGALOW: 'bungalow',
  HOTEL: 'hotel',
};

const advertTypeEnToRu = {
  [AdvertType.PALACE]: 'Дворец',
  [AdvertType.FLAT]: 'Квартира',
  [AdvertType.HOUSE]: 'Дом',
  [AdvertType.BUNGALOW]: 'Бунгало',
  [AdvertType.HOTEL]: 'Отель',
};

const adTypeToPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const PRICE_RANGE = {
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

const ROOMS_GUESTS_OPTIONS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

export {
  AdvertType,
  advertTypeEnToRu,
  adTypeToPrice,
  FILE_TYPE,
  COUNT_OF_ADVERT,
  MAP_ZOOM,
  RERENDER_DELAY,
  NUMBER_AFTER_POINT,
  MAX_PRICE_FOR_NIGHT,
  PRICE_STEP,
  PRICE_RANGE,
  DEFAULT_VALUE,
  ROOMS_GUESTS_OPTIONS
};
