import Square from './Square';

const Gameboard = () => {
  const resetBoard = () => new Array(100).fill(null);
  // const resetBoard = () => {
  //   const array = new Array(100);
  //   for (let i = 0; i < 100; i += 1) {
  //     array[i] = Square();
  //   }
  //   return array;
  // };
  const board = resetBoard();
  const getBoard = () => board;
  const set = (index, value) => (board[index] = value);
  const get = (index) => (board[index]);
  const isValid = (index) => index >= 0 && index < 100;
  const setShip = (ship, allIndex) => {
    if (allIndex.length !== ship.getLength()) {
      return false;
    }
    // check if allIndex are valid && empty
    // maybe make isValidEmpty its own function. Think do this if i re-use this code somehere else
    const isValidEmpty = allIndex.every((index) => isValid(index) && get(index) === null);
    if (!isValidEmpty) {
      return false;
    }

    // check if allIndex have either the same Math.trunc(input/10) or the same % 10
    const isHoriz = allIndex.every((ind) => Math.trunc(ind / 10) === Math.trunc(allIndex[0] / 10));
    const isVertical = allIndex.every((e) => e % 10 === allIndex[0] % 10);
    if (!(isHoriz || isVertical)) {
      return false;
    }

    // if passed all check, set the ship
    allIndex.forEach((index) => {
      set(index, ship);
    });
    return true;
  };
  return {
    getBoard,
    get,
    setShip,
    isValid,
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

// TODO TODO ACTUAL TODO
// change this whole module so that it works ONLY with index instead of also working with input
// and cordinates. Makes it simpler
