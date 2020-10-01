const crypto = require('crypto');

class Character {
  constructor(
    name,
    hp,
    dmg,
    mana,
    character,
    dmgCounter = 0,
    status = 'playing',
    id = ''
  ) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.character = character;
    this.dmgCounter = dmgCounter;
    this.status = status;
    this.id = crypto.randomBytes(16).toString('hex');
  }
  takeDamage(dmg) {
    this.hp = this.hp - dmg;
    this.checkStatus();
  }
  dealDamage(victim, dmg) {
    victim.takeDamage(dmg);
    if (victim.status === 'loser') {
      this.hp += 20;
    }
  }
  setWinner() {
    this.status = 'winner';
  }
  checkStatus() {
    if (this.hp <= 0) {
      this.status = 'loser';
    }
  }
  isAlive() {
    this.checkStatus();
    return this.status == 'playing';
  }
}

module.exports = Character;
