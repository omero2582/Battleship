import events from '../helpers/pubsub';
import Player from './Player';
import GameboardDisplay from './Gameboard.display';

const Game = (p1, p2) => {
  const players = [p1, p2];
  let attackPlayer;
  let defendPlayer;
  let winner;
  const renderPlayers = () => {
    GameboardDisplay.renderP1View(p1, p2);
    GameboardDisplay.renderP2View(p2, p1);
    console.log('render');
  };
  const getAllPlayers = () => players;
  const endGame = () => {
    console.log(`Game Over. ${winner.getName()} Wins`);
    // For now we are not really 'ENDING' the game... we are just not rendering or passing turn
    // Which means it is permanently winner's turn, but I am not showing the results from the hits
    // NEED To actually end the game somehow.... and show a screen that lets me restart the game..

    // something like that
    // have to think about this because right now all the square elements have click listeners
    // But I dont want to immediately render a diff page, bc I want ppl to be able to look
    // at the Game after it ends.. So probably just renderPlayerViws() but have a method that
    // DOESNT add the action listeners... soemthign like that
  };
  const nextTurn = () => {
    defendPlayer = attackPlayer || p2;
    attackPlayer = attackPlayer === p1 ? p2 : p1;
    console.log(`${attackPlayer.getName()}'s turn`);
    renderPlayers();
  };
  const endTurn = () => {
    if (defendPlayer.isAllShipsShunk()) {
      winner = attackPlayer;
      endGame();
    } else {
      nextTurn();
    }
  };
  const onSquareClick = ({ player, index }) => {
    console.log(index);
    if (player === defendPlayer) {
      player.getGameboard().receiveAttack(index);
      endTurn();
    }
  };
  const initialize = () => {
    console.log('game start');
    p1.initializePresetShips();
    p2.initializePresetShips2();
    nextTurn();
  };
  initialize();
  // event bind
  events.on('squareClick', onSquareClick);
  return {
    nextTurn,
    getAllPlayers,
  };
};

export default Game;
