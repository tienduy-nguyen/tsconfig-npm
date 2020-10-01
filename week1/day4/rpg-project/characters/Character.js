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
    id = '',
    skill
  ) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.character = character;
    this.dmgCounter = dmgCounter;
    this.status = status;
    this.id = crypto.randomBytes(16).toString('hex');
    this.skill = skill;
  }
  takeDamage(dmg) {
    this.hp = this.hp - dmg;
    this.checkStatus();
  }
  dealDamage(victim) {
    victim.takeDamage(this.dmg);
    if (victim.status === 'loser') {
      this.hp += 20;
    }
  }
  dealSpecialDamage(victim) {
    if (this.mana < this.skill.mana) {
      console.log(
        'Mana not enough to take a special skill. Force attack with normal skill.'
      );
      victim.takeDamage(this.dmg);
      if (victim.status === 'loser') {
        this.hp += 20;
      }
      return;
    }
    this.mana -= this.skill.mana;
    this.hp += this.skill.pvPlus;
    this.dmg += this.skill.dmgBonus;
    this.skill.dmg += this.skill.dmgBonus;
    victim.takeDamage(this.skill.dmg);
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
