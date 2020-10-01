class Character {
  constructor(hp, dmg, mana, dmgCounter = 0) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.dmgCounter = dmgCounter;
  }
}

module.exports = Character;
