
import Weapon from "./weapon.js";

class Merchant {

    _name = [
        "Harry",
        "Fenrir",
        "Odin",
        "Loki",
        "Dante"
    ]
    _exp
    _inv

    constructor(hero) {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = hero._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._inv = [new Weapon(), new Weapon(), new Weapon(),new Weapon(), new Weapon()];
    }
}

export default Merchant