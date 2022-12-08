// each Gameboard needs an 'ally view' where u can see ur own ship setup
// and a 'enemy view', where you only see the result of hits but NOT ships
import events from '../helpers/pubsub';

const GameboardDisplay = () => {
  const p1View = document.querySelector('.player-view.p1');
  const p2View = document.querySelector('.player-view.p2');
  const squareClass = {
    noHitEmpty: 'no-hit-empty',
    noHitShip: 'no-hit-ship',
    hitEmpty: 'hit-empty',
    hitShip: 'hit-ship',
  };
  const getSquareElement = (square, isAlly) => {
    const squareEl = document.createElement('div');
    let squareType = squareClass.noHitEmpty;
    if (!square.isHit()) {
      squareType = !square.isEmpty() && isAlly ? squareClass.noHitShip : squareClass.noHitEmpty;
    } else {
      squareType = square.isEmpty() ? squareClass.hitEmpty : squareClass.hitShip;
    }
    squareEl.classList.add('square', squareType);
    return squareEl;
  };
  const getBoardElement = (player, isAlly) => {
    const gameboard = player.getGameboard();
    const gameboardEl = document.createElement('div');
    const allyOrEnemyClass = isAlly ? 'ally-view' : 'enemy-view';
    gameboardEl.classList.add('gameboard', allyOrEnemyClass);
    gameboard.getBoard().forEach((square, index) => {
      const squareEl = getSquareElement(square, isAlly);
      if (!isAlly) {
        squareEl.addEventListener('click', () => events.emit('squareClick', { player, index }));
      }
      gameboardEl.appendChild(squareEl);
    });
    return gameboardEl;
  };

  const getBoardContainerElement = (gameboardElement, boardTitle) => {
    const boardContainer = document.createElement('div');
    const boardTitleEl = document.createElement('div');
    boardTitleEl.textContent = boardTitle;
    boardContainer.appendChild(boardTitleEl);
    boardContainer.appendChild(gameboardElement);
    return boardContainer;
  };

  const renderView = (allyPlayer, enemyPlayer, isPlayer1) => {
    const playerView = isPlayer1 ? p1View : p2View;
    playerView.replaceChildren();
    const allyBoardEl = getBoardElement(allyPlayer, true);
    const enemyBoardEl = getBoardElement(enemyPlayer, false);
    //
    const allyBoardContainer = getBoardContainerElement(allyBoardEl, 'Ally Board');
    const enemyBoardContainer = getBoardContainerElement(enemyBoardEl, 'Enemy Board');
    playerView.appendChild(allyBoardContainer);
    playerView.appendChild(enemyBoardContainer);
  };
  const renderP1View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, true);
  const renderP2View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, false);
  return {
    renderP1View,
    renderP2View,
  };
};

export default GameboardDisplay();
