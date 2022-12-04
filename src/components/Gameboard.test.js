import Gameboard from './Gameboard'
import Ship from './Ship';
import {inputToIndex, allInputsToIndex} from './input';
describe('Gameboard', () =>{
  it('board starts empty', () =>{
    const board = Gameboard();
    expect(board.getBoard()).toEqual(new Array(100).fill(null));
  });

  it('input cordinate is valid (on board)', () => {
    const board = Gameboard();
    const aCode = 'A'.charCodeAt();
    
    const allowedCoordinates = [];
    for (let i = 0; i < 10; i++){
      const char = String.fromCharCode(aCode + i);
      for (let j = 0; j < 10; j++){
        allowedCoordinates[i*10 + j] = char + (j+1) 
      }
    }
    allowedCoordinates.forEach(input => {
      expect(board.isValid(inputToIndex(input))).toBe(true);
    })
    expect(board.isValid(inputToIndex('A1'))).toBe(true);
    expect(board.isValid(inputToIndex('A0'))).toBe(false);
    expect(board.isValid(inputToIndex('J11'))).toBe(false);
    expect(board.isValid(inputToIndex('K1'))).toBe(false);
  })

  it('converts coordinate into corresponding array index', () => {
    expect(inputToIndex('A1')).toEqual(0);
    expect(inputToIndex('J10')).toEqual(99);
  })

  it.skip('board can add ships', () => {

  });

  it('setsShip if Coordinates are valid and empty and either horizontal or veritcal', () => {
    const board = Gameboard();
    const ship1 = Ship(2);
    expect(board.setShip(ship1, allInputsToIndex(['A1']))).toBe(false);
    expect(board.setShip(ship1, allInputsToIndex(['A1', 'A0']))).toBe(false);
    expect(board.setShip(ship1, allInputsToIndex(['A1', 'A2']))).toBe(true);
    expect(board.get(0)).toEqual(ship1);
    expect(board.get(1)).toEqual(ship1);
    expect(board.get(2)).toBe(null);
  })
});
