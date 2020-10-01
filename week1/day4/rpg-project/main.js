const Fighter = require('./characters/Fighter');
const Paladin = require('./characters/Paladin');
const Monk = require('./characters/Monk');
const Berzerker = require('./characters/Berzerker');
const Assassin = require('./characters/Assassin');
const Wizard = require('./characters/Wizard');
const Hulk = require('./characters/Hulk');
const Game = require('./Game');

const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moanna = new Monk('Moanna');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
const Karen = new Wizard('Karen');
const Paul = new Hulk('Paul');

console.log('************************************');
console.log('Welcome to RPG game');
console.log('************************************');

let players = [Grace, Ulder, Moanna, Draven, Carl, Karen, Paul];

const rpgGame = new Game(players);
rpgGame.startGame();
