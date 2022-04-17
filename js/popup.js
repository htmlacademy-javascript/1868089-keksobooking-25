import {getWordEnd} from'./util.js';
import {adTypesToReadable} from'./constant.js';

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPhotoElement = (photoArray, parentElement) => {
  photoArray.forEach((photo) => {
    const photoTemplate = parentElement.children[0].cloneNode(true);
    photoTemplate.src = photo;
    parentElement.append(photoTemplate);
  });
  parentElement.children[0].remove();
};

const createFeatureElement = (list, featuresArray) => {
  list.forEach((listItem) => {
    const isExists = featuresArray.some((userFeature) =>
      listItem.classList.contains(`popup__feature--${userFeature}`),
    );
    if (!isExists) {listItem.remove();}
  });
};

const analyzeAvailableData = (key, element) => {
  if (!key) {
    element.remove();
  }
};

const createPopup = ({offer, author}) => {
  const adElement = similarAdTemplate.cloneNode(true);

  const adTitle = adElement.querySelector('.popup__title');
  const adAddress = adElement.querySelector('.popup__text--address');
  const adPrice = adElement.querySelector('.popup__text--price');
  const adType = adElement.querySelector('.popup__type');
  const adCapacity = adElement.querySelector('.popup__text--capacity');
  const adTime = adElement.querySelector('.popup__text--time');
  const adDescription = adElement.querySelector('.popup__description');
  const adAvatar = adElement.querySelector('.popup__avatar');
  const adFeatures = adElement.querySelector('.popup__features');
  const featuresList = adElement.querySelectorAll('.popup__feature');
  const adPhotos = adElement.querySelector('.popup__photos');

  adTitle.textContent = offer.title;
  adAddress.textContent = offer.address;
  adPrice.textContent = `${offer.price} ₽/ночь`;
  adType.textContent = adTypesToReadable[offer.type];
  adCapacity.textContent = `${offer.rooms} ${getWordEnd(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${getWordEnd(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  adTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  adDescription.textContent = offer.description;
  adAvatar.src = author.avatar;

  analyzeAvailableData(offer.title, adTitle);
  analyzeAvailableData(offer.address, adAddress);
  analyzeAvailableData(offer.price, adPrice);
  analyzeAvailableData(offer.type, adType);
  analyzeAvailableData(offer.rooms, adCapacity);
  analyzeAvailableData(offer.checkin, adTime);
  analyzeAvailableData(offer.description, adDescription);
  analyzeAvailableData(author.avatar, adAvatar);


  if (offer.features) {
    createFeatureElement(featuresList, offer.features);
  } else {
    adFeatures.remove();
  }

  if (offer.photos) {
    createPhotoElement(offer.photos, adPhotos);
  } else {
    adPhotos.remove();
  }

  return adElement;
};

export {createPopup};
