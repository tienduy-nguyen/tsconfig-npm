class Dungeon {
  constructor(advisedLevel, maximalPlayer, state) {
    this.advisedLevel = advisedLevel;
    this.maximalPlayer = maximalPlayer;
    this.state = state;
  }

  killBoss() {
    console.log('The boss is dead ! Well played');
    this.state = 'defeated';
  }
}

module.exports = Dungeon;
