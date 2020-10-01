const getRandom = require('./utils/getRandom');
const compareHp = require('./utils/compareHp');
const shuffleArray = require('./utils/shuffleArray');
const getPlayerMaxHp = require('./utils/getPlayerMaxHp');

class Game {
  constructor(players, turnLeft = 10, status = 'onPlaying') {
    this.turnLeft = turnLeft;
    this.status = status;
    this.players = players; //array
  }

  skipTurn() {
    this.turnLeft -= 1;
  }

  watchStats() {
    this.updatePlayers();
    console.log('----------------------------');
    console.log('List of players are on game:');
    this.players.forEach((player, index) => {
      console.log(
        `${index}  -  ${player.name}  -  ${player.character}  - Hp: ${player.hp}`
      );
    });
    console.log('----------------------------');
  }

  startGame() {
    for (let i = 1; i <= 11; i++) {
      if (this.isEndGame()) {
        return;
      }
      this.__startTurn(i);
    }
  }

  updatePlayers() {
    if (this.isEndGame()) return;
    this.players = this.players.filter((x) => x.hp > 0);
  }
  isEndGame() {
    return this.status != 'onPlaying';
  }

  getWinner(player) {
    if (player) {
      player.setWinner();
      console.log('*****************************');
      console.log(`The winner is: ${player.name}`);
      console.log('*****************************');
    }
  }
  //Private methods
  __checkGame() {
    this.updatePlayers();
    if (this.turnLeft < 1 || this.players.length < 2) {
      const winner = getPlayerMaxHp(this.players);
      this.status = 'endGame';
      this.isEndGame();
      console.log('Game Ended');

      this.getWinner(winner);
      return;
    }
  }

  //Each round of game
  __startTurn(num, players = this.players) {
    this.updatePlayers();
    this.__checkGame();
    if (this.isEndGame()) return;
    console.log(`It's turn ${num}`);
    let newOrders = shuffleArray(players);
    for (let i = 0; i < newOrders.length; i++) {
      let attacker = newOrders[i];
      let enemy = i == newOrders.length - 1 ? newOrders[0] : newOrders[i + 1];
      this.__twoPlayersInOneTurn(attacker, enemy);
      newOrders = newOrders.filter((x) => x.hp > 0);
    }

    this.watchStats();
    this.skipTurn();
    console.log('------------');
  }

  // Attack between two player
  __twoPlayersInOneTurn(attacker, enemy) {
    const specialKillChances = [true, false, true, false, false, false];
    let isSpecialSkill = getRandom(specialKillChances);
    console.log(`It's time to ${attacker.name} play`);
    let attackDmg = 0;
    if (isSpecialSkill) {
      attacker.dealSpecialDamage(enemy);
      attackDmg = attacker.skill.dmg;
      console.log(
        `${attacker.name} is attacking ${enemy.name} ********** with special skills **********. 
        He deals him ${attackDmg} damages.`
      );
    } else {
      attacker.dealDamage(enemy);
      attackDmg = attacker.dmg;
      console.log(
        `${attacker.name} is attacking ${enemy.name}. 
        He deals him ${attackDmg} damages.`
      );
    }

    if (enemy.isAlive()) {
      console.log(`      ${enemy.name} got ${attackDmg} left.`);
    } else {
      console.log(`      ${enemy.name} died.`);
    }
  }
}

module.exports = Game;
