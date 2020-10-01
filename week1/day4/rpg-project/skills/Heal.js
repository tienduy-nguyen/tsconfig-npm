const SpecialSkill = require('./SpecialSkill');

class Heal extends SpecialSkill {
  constructor(dmg = 0, mana = 25, dmgCounter = 0, dmgBonus = 0, pvPlus = 8) {
    super(dmg, mana, dmgCounter, dmgBonus);
    this.pvPlus = pvPlus;
  }
}

module.exports = Heal;
