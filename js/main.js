function getRandomIntInclusive(min, max) {
  if (min === max) {
    throw new RangeError('min не может быть равным max');
  }
  if (min > max) {
    throw new RangeError('min не может быть больше max');
  }
  if (min < 0) {
    throw new RangeError('min не может быть меньше нуля');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomFloatInclusive(min, max, n) {
  if (min === max) {
    throw new RangeError('min не может быть равным max');
  }
  if (min > max) {
    throw new RangeError('min не может быть больше max');
  }
  if (min < 0) {
    throw new RangeError('min не может быть меньше нуля');
  }
  return (Math.random() * (max - min) + min).toFixed(n); //Максимум и минимум включаются
}

getRandomIntInclusive(1, 100);

getRandomFloatInclusive(1, 100, 5);
