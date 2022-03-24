class Rolmaster {

    _name
    _hp
    _exp
    _str
    _end
    _inv
    _gold

    constructor() {
        this._name = _name;
        this._hp = _hp;
    }

}

let player = new Npc("Morgan");

class Weapon {

    constructor (_name, _damage) {
        this._damage = _damage;
        this._name = _name;
    }
}

let arme1 = new Weapon("greatSword", 5);

player._inv.push(arme1);

console.log(player._inv);

class Monster extends Npc {

}

let enemie = new Monster("Hydra");

console.log(enemie._);
