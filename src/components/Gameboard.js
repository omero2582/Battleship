import Square from './Square';

const Gameboard = () => {
  // const resetBoard = () => new Array(100).fill(null);
  const resetBoard = () => {
    const array = new Array(100);
    for (let i = 0; i < 100; i += 1) {
      array[i] = Square();
    }
    return array;
  };
  const board = resetBoard();
  // change the top 2 methods i think... we can do setSquare(i, Square) on board ???
  // not sure how that would combine with initializing the array to 100 tho... so maybe not
  const getBoard = () => board;
  const getSquare = (index) => board[index];
  const setPiece = (index, piece) => (getSquare(index).setShip(piece));
  const getPiece = (index) => (getSquare(index).getShip());
  const isValid = (index) => index >= 0 && index < 100;
  const setShip = (ship, allIndex) => {
    if (allIndex.length !== ship.getLength()) {
      return false;
    }
    // check if allIndex are valid && empty
    // can also use getPiece(index) === null at the end here instead of getSquare(index).isEmpty()
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

    // if passed all check, setPiece the ship
    allIndex.forEach((index) => {
      setPiece(index, ship);
    });
    return true;
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
    setShip,
    isValid,
    receiveAttack,
    visualizeBoard,
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
