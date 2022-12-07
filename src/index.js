import Player from './components/Player';
import GameboardDisplay from './components/Gameboard.display';
import Ship from './components/Ship';
import './style.css';

const p1 = Player('p1');
const p2 = Player('p2');
const p1Board = p1.getGameboard();
// p1Board.setShip(Ship(2), [0, 1]);
p1.initializePresetShips();
const p2Board = p2.getGameboard();
GameboardDisplay.renderP1View(p1Board, p2Board);
GameboardDisplay.renderP2View(p2Board, p1Board);
// TODO i think pass the player insted of the board... then getGameboard() INSIDE the function.
// this way we can extract things like name inside the function
// and more IMPORTANTLY, we can add a "() => player" to the click handler of the squares
// AKA the gameboard renders will be able to tell me which player it comes from

// .... Although now that i think about it, its kinda strange that I cant otherwise tell...
// very sleepy, but i think its because we have a player -> gameboard relationship, and the
// display is completely separate... so theres no connection to the player that owns the gameboard

console.log('index');

// export default index;
