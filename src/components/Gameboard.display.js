// each Gameboard needs an 'ally view' where u can see ur own ship setup
// and a 'enemy view', where you only see the result of hits but NOT ships

const GameboardDisplay = () => {
  const gameboardAlly = document.querySelector('.gameboard.ally-view');
  const squareClass = {
    emptyNoHit: '--empty-no-hit',
    emptyHit: '--empty-hit',
    shipNoHit: '--ship-no-hit',
    shipHit: '--ship-hit',
  };
  let squareType = squareClass.emptyNoHit;

  const renderBoardAlly = (gameboard) => {
    gameboardAlly.replaceChildren();

    gameboard.getBoard().forEach((square) => {
      const squareEl = document.createElement('div');
      if (!square.isEmpty()) {
        if (square.isHit()) {
          squareType = squareClass.shipHit;
        }
        squareType = squareClass.shipNoHit;
      // eslint-disable-next-line no-else-return
      } else {
        if (square.isHit()) {
          squareType = squareClass.emptyHit;
        }
        squareType = squareClass.emptyNoHit;
      }
      squareEl.classList.add('square');
      squareEl.classList.add(squareType);
      gameboardAlly.appendChild(squareEl);
    });
  };
  return {
    renderBoardAlly,
  };
};

export default GameboardDisplay();
