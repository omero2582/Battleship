import Ship from './Ship';
import Square from './Square';

const Gameboard = () => {
  let board = null;
  let myShips = [];
  const resetBoard = () => {
    board = new Array(100);
    for (let i = 0; i < 100; i += 1) {
      board[i] = Square();
    }
    return board;
  };
  resetBoard();
  const getBoard = () => board;
  const getSquare = (index) => board[index];
  const setPiece = (index, piece) => (getSquare(index).setShip(piece));
  const getPiece = (index) => (getSquare(index).getShip());
  const isValid = (index) => index >= 0 && index < 100;
  const getAllShips = () => myShips;
  const setShip = (allIndex, ship = Ship(allIndex.length)) => {
    if (allIndex.length !== ship.getLength()) {
      return false;
    }
    // check if allIndex are valid && empty
    const isValidEmptyNotHit = allIndex.every((index) => isValid(index)
                                                        && getSquare(index).isEmpty()
                                                        && !getSquare(index).isHit());
    if (!isValidEmptyNotHit) {
      return false;
    }

    // check if allIndex have either the same Math.trunc(input/10) or the same % 10
    const isHoriz = allIndex.every((ind) => Math.trunc(ind / 10) === Math.trunc(allIndex[0] / 10));
    const isVertical = allIndex.every((e) => e % 10 === allIndex[0] % 10);
    if (!(isHoriz || isVertical)) {
      return false;
    }

    // if passed all check, setPiece the ship, and add to myShips
    allIndex.forEach((index) => {
      setPiece(index, ship);
    });
    myShips.push(ship);
    return true;
  };
  const setMultipleShips = (...args) => {
    // ex ([1,2,3], [40,41,42])
    args.forEach((cordinatesArray) => setShip(cordinatesArray));
  };
  const receiveAttack = (index) => getSquare(index).hitSquare();
  const visualizeBoard = () => {
    // test visualizer
    const out = getBoard().map((square) => {
      if (!square.isEmpty()) {
        if (square.isHit()) {
          return 'SH';
        }
        return 'S';
      // eslint-disable-next-line no-else-return
      } else {
        if (square.isHit()) {
          return 'EH';
        }
        return 'E';
      }
    });
    return out;
    // the ifs here look kind of messy... Right now we Need isEmptyHit() to come BEFORE isEmpty()
    // otherwise if its in reverse order, isEmptyHit() will never get evaluated, since isEmpty()
    // would short-circuit it
  };
  return {
    getBoard,
    getPiece,
    getSquare,
    getAllShips,
    setShip,
    setMultipleShips,
    isValid,
    receiveAttack,
    visualizeBoard,
    resetBoard,
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
