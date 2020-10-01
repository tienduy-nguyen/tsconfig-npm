const Character = require('./Character');
const ShadowHit = require('../skills/ShadowHit');

class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    dmg = 6,
    mana = 20,
    character = 'Assassin',
    dmgCounter = 0,
    status = 'playing',
    id,
    skill = new ShadowHit(),
    specialCounter = 0
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
    this.specialCounter = specialCounter;
  }

  takeDamage(dmg) {
    if (this.specialCounter == 0) {
      this.hp = this.hp - dmg;
    }
    this.checkStatus();
    this.specialCounter = 0;
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
    this.specialCounter = 1; // No lost health in the next round
    this.mana -= this.skill.mana;
    this.dmg += this.skill.dmgBonus;
    this.skill.dmg += this.skill.dmgBonus;
    victim.takeDamage(this.skill.dmg);
    if (victim.status === 'loser') {
      this.hp += 20;
    } else {
      this.hp += this.skill.pvPlus;
    }
  }
}

module.exports = Assassin;
