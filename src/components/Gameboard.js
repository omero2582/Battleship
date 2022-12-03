const Gameboard = () => {
  const resetBoard = () => new Array(100).fill(null);
  const board = resetBoard();
  const getBoard = () => board;
  const setCoordinate = (index, value) => (board[index] = value);
  const getCoordinate = (index) => (board[index]);
  const inputToCoordinate = (input) => [input[0].toUpperCase(), +input.slice(1)];

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

  const getIndex = ([letter, number]) => {
    const letterMultiplier = (letter.charCodeAt() - 'A'.charCodeAt()) * 10;
    return letterMultiplier + number - 1;
  };

  const isCoordinateValidEmpty = ([letter, number]) => {
    // i think delete this function.. it is ONLY used by setShip
    // and it makes it suboptimal to use
    // not sure...
    // when we render the map, we dont need this anyways bc
    // we will just be going over the whole board.... so we dont need to check if they are valid
    if (isCoordinateValid([letter, number])) {
      const index = getIndex([letter, number]);
      return board[index] === null;
    }
    return false;
  };

  const setShip22 = (ship, inputArray) => {
    if (inputArray.length !== ship.getLength()) {
      return false;
    }
    // if (ship.getLength() === inputArray.length() === 1) {
    //   // if length is 1
    // }

    // --- was rewriting this, but read TODO at end of File
    // const allCoordsEmptyValid = inputArray.every((input) => {
    //   const coordinate = inputToCoordinate(input);
    //   return isCoordinateValidEmpty(coordinate);
    // });

    // if (!allCoordsEmptyValid) {
    //   return false;
    // }

    // const allIndex = inputArray.map((input) => {
    //   const coordinate = inputToCoordinate(input);
    //   return getIndex(coordinate);
    // });
    // ----
    const allIndex = inputArray.map((input) => {
      const coordinate = inputToCoordinate(input);
      if (!isCoordinateValid(coordinate)) {
        return false;
      }
      // check if its empty... i want to check this without isValidEmpty
      const index = getIndex(coordinate);
      if (!(getCoordinate(index) === null)) {
        return false;
      }
      return index;
    });

    const hasInvalidInput = allIndex.some((index) => index === false);
    if (hasInvalidInput) {
      return false;
    }

    // check if all inputs have either the same Math.trunc(input/10) or the same % 10
    const isHoriz = allIndex.every((ind) => Math.trunc(ind / 10) === Math.trunc(allIndex[0] / 10));
    const isVertical = allIndex.every((e) => e % 10 === allIndex[0] % 10);
    if (!(isHoriz || isVertical)) {
      return false;
    }

    allIndex.forEach((index) => {
      setCoordinate(index, ship);
    });
    return true;
  };
  return {
    getBoard,
    getCoordinate,
    getIndex,
    isCoordinateValid,
    isCoordinateValidEmpty,
    setShip22,
    inputToCoordinate,
  };
};

export default Gameboard;

// TODO TODO the setShip portion at the bottom that we were rewruiting seems like
// it forces me to write too much code.... maybe less it better even if it is worse algo

// HOWEVER this also makes me realize that we are doing this WAYYYYY TOO MESSY
// we are working with inputs, coordinates, and index
// and different methods expect a differnt parameter... which is impossible to tell
// i think it is best to just make all methods work with index.
// if we want to, we can also have some helper methods here for outside callers, such as
// inputToIndex() and isInputValid()
