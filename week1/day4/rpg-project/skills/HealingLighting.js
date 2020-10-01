const Skill = require('./Skill');

class HealingLighting extends Skill {
  constructor(dmg = 4, mana = 40, dmgCounter = 5, dmgBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus);
  }
}

module.exports = HealingLighting;
