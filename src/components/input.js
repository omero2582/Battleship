const isCoordinateValid = ([letter, number]) => {
  if (!(letter >= 'A' && letter <= 'J')) {
    // if letter is a number, it converts 'A' & 'J' to NaN during comparisson == false
    return false;
  }
  if (!(number >= 1 && number <= 10)) {
    return false;
  }
  return true;
};
const inputToCoordinate = (input) => [input[0].toUpperCase(), +input.slice(1)];
const coordinateToIndex = ([letter, number]) => {
  const letterMultiplier = (letter.charCodeAt() - 'A'.charCodeAt()) * 10;
  return letterMultiplier + number - 1;
};
export const inputToIndex = (input) => {
  const coordinate = inputToCoordinate(input);
  if (!isCoordinateValid) {
    return false;
  }
  return coordinateToIndex(coordinate);
};
export const allInputsToIndex = (indexArray) => indexArray.map((index) => inputToIndex(index));
