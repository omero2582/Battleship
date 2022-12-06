import Game from "./Game";
import Player from "./Player";

describe('Game', () => {
  it('nextTurn switches between players', () => {
    const game = Game();
    expect(game.getAllPlayers()).toEqual([]);
    
    const p1 = Player('first');
    const p2 = Player('second');
    game.addPlayer(p1);
    expect(game.getAllPlayers()[0]).toEqual(p1);
    game.addPlayer(p2);
    expect(game.getAllPlayers()[1]).toEqual(p2);

    game.start();
    expect(game.getTurnPlayer()).toEqual(p1);
    game.nextTurn();
    expect(game.getTurnPlayer()).toEqual(p2);
    game.nextTurn();
    expect(game.getTurnPlayer()).toEqual(p1);
  })
});