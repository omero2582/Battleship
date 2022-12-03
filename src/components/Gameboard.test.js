import Gameboard from './Gameboard'
import Ship from './Ship';

describe('Gameboard', () =>{
  it('board starts empty', () =>{
    const board = Gameboard();
    expect(board.getBoard()).toEqual(new Array(100).fill(null));
  });

  it.skip('board can add ships', () => {

  });

  it('input cordinate is on board', () => {
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
      expect(board.isCoordinateValid(board.inputToCoordinate(input))).toBe(true);
    })
    expect(board.isCoordinateValid(board.inputToCoordinate('A1'))).toBe(true);
    expect(board.isCoordinateValid(board.inputToCoordinate('A0'))).toBe(false);
    expect(board.isCoordinateValid(board.inputToCoordinate('J11'))).toBe(false);
    expect(board.isCoordinateValid(board.inputToCoordinate('K1'))).toBe(false);
  })

  it('converts coordinate into corresponding array index', () => {
    const board = Gameboard();
    expect(board.getIndex(board.inputToCoordinate('A1'))).toEqual(0);
    expect(board.getIndex(board.inputToCoordinate('J10'))).toEqual(99);
  })

  it('setsShip if Coordinates are valid and empty and either horizontal or veritcal', () => {
    const board = Gameboard();
    const ship1 = Ship(2);
    expect(board.setShip22(ship1, ['A1'])).toBe(false);
    expect(board.setShip22(ship1, ['A1', 'A0'])).toBe(false);
    expect(board.setShip22(ship1, ['A1', 'A2'])).toBe(true);
    expect(board.getCoordinate(0)).toEqual(ship1);
    expect(board.getCoordinate(1)).toEqual(ship1);
    expect(board.getCoordinate(2)).toBe(null);
  })
});
