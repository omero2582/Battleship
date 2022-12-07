import Ship from '../Ship'

describe('Ship', () => {
  it('Ship length matches instantiation', () => {
    const ship1 = Ship(2);
    expect(ship1.getLength()).toEqual(2);
  });
  it('hits increases by 1', () =>{
    const ship1 = Ship(2);
    expect(ship1.hit()).toEqual(1);
    expect(ship1.hit()).toEqual(2);
  })
  it('getHits() works', () =>{
    const ship1 = Ship(2);
    expect(ship1.getHits()).toEqual(0);
    ship1.hit();
    expect(ship1.getHits()).toEqual(1);
    expect(ship1.hit()).toEqual(2);
  })
  it('Sinks when hits >= length', () => {
    const ship1 = Ship(2);
    expect(ship1.isSunk()).toBe(false)
    ship1.hit();
    expect(ship1.isSunk()).toBe(false)
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);
  })
});
