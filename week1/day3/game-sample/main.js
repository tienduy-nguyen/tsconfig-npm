const BlackrockDepths = require('./objects/BlackrockDepths');

let instance1 = new BlackrockDepths('13h57', 4);
let instance2 = new BlackrockDepths('14h49', 5);

console.log(instance1);
console.log(instance2);

instance2.killBoss();

console.log(instance2);
