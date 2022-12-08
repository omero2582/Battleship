import Gameboard from './Gameboard';
import Ship from './Ship';

const Player = (name) => {
  let myName = name;
  let myBoard = Gameboard();
  const setGameboard = (board) => (myBoard = board);
  const getGameboard = () => myBoard;
  const getName = () => myName;
  const setName = (newName) => (myName = newName);
  const isAllShipsShunk = () => {
    const out = getGameboard().getAllShips().every((ship) => ship.isSunk());
    if (out) {
      console.log(`All ships have sunk for player: ${name}`);
    }
    return out;
  };
  const initializePresetShips = () => {
    getGameboard().resetBoard();
    getGameboard().setMultipleShips([0, 1], [6, 16, 26], [45, 46, 47, 48], [81, 82, 83, 84, 85]);
  };

  const initializePresetShips2 = () => {
    getGameboard().resetBoard();
    getGameboard().setMultipleShips([55, 65], [9, 19, 29], [31, 32, 33, 34], [95, 96, 97, 98, 99]);
  };

  return {
    setGameboard,
    getGameboard,
    setName,
    getName,
    initializePresetShips,
    initializePresetShips2,
    isAllShipsShunk,
  };
};

export default Player;
