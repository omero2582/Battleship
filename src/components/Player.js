import Gameboard from './Gameboard';
import Ship from './Ship';

const Player = (name) => {
  let myName = name;
  let myBoard = Gameboard();
  const setGameboard = (board) => (myBoard = board);
  const getGameboard = () => myBoard;
  const getName = () => myName;
  const setName = (newName) => (myName = newName);
  const initializePresetShips = () => {
    // someting
    getGameboard().resetBoard();
    getGameboard().setShip(Ship(2), [0, 1]);
    getGameboard().setShip(Ship(3), [6, 16, 26]);
    getGameboard().setShip(Ship(4), [45, 46, 47, 48]);
    getGameboard().setShip(Ship(5), [81, 82, 83, 84, 85]);
  };

  return {
    setGameboard,
    getGameboard,
    setName,
    getName,
    initializePresetShips,
  };
};

export default Player;
