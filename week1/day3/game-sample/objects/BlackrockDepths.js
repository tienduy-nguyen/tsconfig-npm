const Dungeon = require('./Dungeon');

class BlackrockDepths extends Dungeon {
  constructor(
    arrival,
    playerNumber,
    state = 'ongoing',
    advisedLevel = 59,
    maximalPlayers = 5
  ) {
    super(state, advisedLevel, maximalPlayers);
    this.arrival = arrival;
    this.playerNumber = playerNumber;
  }
}

module.exports = Dungeon;
