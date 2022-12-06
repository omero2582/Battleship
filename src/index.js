import Player from './components/Player';
import GameboardDisplay from './components/Gameboard.display';
import './style.css';

// const gameboard1 = document.querySelector('.gameboard.ally-view');

// //clears childs
// gameboard1.replaceChildren();

// for (let i = 0; i < 100; i += 1) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   gameboard1.appendChild(square);
// }

const p1 = Player('p1');
const p1Board = p1.getGameboard();
GameboardDisplay.renderBoardAlly(p1Board);

console.log('index');

// export default index;
