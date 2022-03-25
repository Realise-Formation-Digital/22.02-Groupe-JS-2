import Arme from "./arme.js";
import Hero from "./hero.js";
import Weapon from "./weapon.js";
import Monster from "./monster.js";
import Merchant from './merchant.js'

let Geralt = new Hero();
console.log(Geralt);

let arme = new Weapon();
let arme2 = new Weapon();

console.log(arme);
console.log(arme2);

let enemie = new Monster(Geralt);
console.log(enemie);

let vendor = new Merchant(Geralt);
console.log(vendor);

let armemerchant= new Arme()
console.log(armemerchant)