const Gameboard = () => {
  const resetBoard = () => new Array(100).fill(null);
  const board = resetBoard();
  const getBoard = () => board;
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
  const isCoordinateEmpty = ([letter, number]) => {
    if (isCoordinateValid([letter, number])) {
      const index = getIndex([letter, number]);
      return board[index] === null;
    }
    return false;
  };

  const setCoordinate = (index, value) => (board[index] = value);
  const getCoordinate = (index) => (board[index]);
  const setShip = (ship, start, end) => {
    const [startLetter, startNumber] = inputToCoordinate(start);
    const [endLetter, endNumber] = inputToCoordinate(end);

    if (startLetter === endLetter) {
      if ((endNumber - startNumber) === ship.getLength()) {
        // how do i get all coordinated in between start and end ?
        for (let i = getIndex([startLetter, startNumber]); i < ship.getLength(); i += 1) {
          setCoordinate(i, ship);
        }
      }
    } else if (startNumber === endNumber) {
      // check if dff in letter equivalent number == ship.length
      if ((endLetter.charCodeAt() - startLetter.charCodeAt()) === ship.getLength()) {
        // all coordinated between start and end
        for (let i = getIndex([startLetter, startNumber]); i < ship.getLength(); i += 10) {
          setCoordinate(i, ship);
        }
      }
    }
    // TODOTODO rn this only lets u setSHip left to right or downwards... how to fix ??

    // isCoordinateEmpty() on start & end coords,
    // are input cords ONLY either Horiz or Vertical ?
    // is shipLength = total spots
    // Maybe veritcal/horizontal check is simple...?
    // check if either the Letter or Num stays the same
    // for ex: 'A1 to A4' OR 'A1 to D1'... I only changed either the 'A' or the '1'
    // can ALSO JUST use %10 for vertical and x === x +/- 1 for horizontal
  };
  const setShip22 = (ship, inputArray) => {
    if (inputArray.length !== ship.getLength()) {
      return false;
    }
    // if (ship.getLength() === inputArray.length() === 1) {
    //   // if length is 1
    // }

    const allCoordsEmptyValid = inputArray.every((input) => {
      const coordinate = inputToCoordinate(input);
      return isCoordinateEmpty(coordinate);
    });

    if (!allCoordsEmptyValid) {
      return false;
    }

    const allIndex = inputArray.map((input) => {
      const coordinate = inputToCoordinate(input);
      return getIndex(coordinate);
    });

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
    isCoordinateEmpty,
    setShip22,
    inputToCoordinate,
  };
};

export default Gameboard;
