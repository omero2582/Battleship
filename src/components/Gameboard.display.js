// each Gameboard needs an 'ally view' where u can see ur own ship setup
// and a 'enemy view', where you only see the result of hits but NOT ships

const GameboardDisplay = () => {
  // const game = document.querySelector('.game');
  const p1View = document.querySelector('.player-view.p1');
  const p2View = document.querySelector('.player-view.p2');
  const squareClass = {
    emptyNoHit: 'empty-no-hit',
    emptyHit: 'empty-hit',
    shipNoHit: 'ship-no-hit',
    shipHit: 'ship-hit',
  };
  let squareType = squareClass.emptyNoHit;

  const getBoardElement = (gameboard, isAlly) => {
    const gameboardEl = document.createElement('div');
    const allyOrEnemyClass = isAlly ? 'ally-view' : 'enemy-view';
    gameboardEl.classList.add('gameboard', allyOrEnemyClass);
    gameboard.getBoard().forEach((square) => {
      const squareEl = document.createElement('div');
      squareType = squareClass.emptyNoHit;
      if (square.isEmpty()) {
        if (square.isHit()) {
          squareType = squareClass.emptyHit;
        }
        squareType = squareClass.emptyNoHit;
      // eslint-disable-next-line no-else-return
      } else {
        if (square.isHit()) {
          squareType = squareClass.shipHit;
        }
        squareType = isAlly ? squareClass.shipNoHit : squareClass.emptyNoHit;
      }
      squareEl.classList.add('square', squareType);
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

  const renderView = (allyBoard, enemyBoard, isPlayer1) => {
    const playerView = isPlayer1 ? p1View : p2View;
    playerView.replaceChildren();
    const allyBoardEl = getBoardElement(allyBoard, true);
    const enemyBoardEl = getBoardElement(enemyBoard, false);
    //
    const allyBoardContainer = getBoardContainerElement(allyBoardEl, 'Ally Board');
    const enemyBoardContainer = getBoardContainerElement(enemyBoardEl, 'Enemy Board');
    playerView.appendChild(allyBoardContainer);
    playerView.appendChild(enemyBoardContainer);
    //
    // p1View.appendChild(p1AllyBoard);
    // p1View.appendChild(p2EnemyBoard);
  };
  const renderP1View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, true);
  const renderP2View = (allyBoard, enemyBoard) => renderView(allyBoard, enemyBoard, false);
  return {
    renderP1View,
    renderP2View,
  };
};

export default GameboardDisplay();
