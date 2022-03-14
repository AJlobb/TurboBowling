const {
    player
} = require('../player');

describe('Get player name', () => {
    it('A player can retieve their name', () => {
        const player = new player();
        expect(player.getName()).toEqual("alex");
    });
});