import Gameboard from './Gameboard';

const Player = (name) => {
  let myName = name;
  let myBoard = Gameboard();
  const setGameboard = (board) => (myBoard = board);
  const getGameboard = () => myBoard;
  const getName = () => myName;
  const setName = (newName) => (myName = newName);

  return {
    setGameboard,
    getGameboard,
    setName,
    getName,
  };
};

export default Player;
