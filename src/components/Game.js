import Player from "./Player";

const Game = () => {
  const players = [];
  let turnPlayer;
  const addPlayer = (player) => players.push(player);
  const getTurnPlayer = () => turnPlayer;
  const start = () => {
    // eslint-disable-next-line prefer-destructuring
    turnPlayer = players[0];
  };
  const nextTurn = () => {
    turnPlayer = turnPlayer === players[1] ? players[0] : players[1];
  };
  const getAllPlayers = () => players;
  return {
    start,
    nextTurn,
    getAllPlayers,
    addPlayer,
    getTurnPlayer,
  };
};

export default Game;
