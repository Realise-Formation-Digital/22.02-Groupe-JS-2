import Weapon from "./weapon.js"

class Monster {

    _name = [
        "Bolrog",
        "Orc",
        "minion",
        "Wyvern",
        "Kobold",
        "Lich",
        "Berserker",
        "Cacodemon",
        "Bandit",
        "ghoul",
        "Vampire",
        "Banshee",
        "Golem",
        "Succubus"
    ]
    _dam
    _gold
    _end
    _exp

    constructor(hero) {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = hero._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._gold = hero._exp + 1 * [Math.floor(Math.random() * 49) + 1];
        this._end = hero._exp + 1 * [Math.floor(Math.random() * 3) + 1];
        this._exp = 1;
        this._inv = [new Weapon()];
    }
}

export default Monster