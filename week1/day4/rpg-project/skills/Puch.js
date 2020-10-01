const SpecialSkill = require('./SpecialSkill');

class Fireball extends SpecialSkill {
  constructor(dmg = 5, mana = 20, dmgCounter = 0, dmgBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus);
  }
}

module.exports = Fireball;
