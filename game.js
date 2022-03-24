class Hero {

    _name
    _hp 
    _exp
    _str
    _end
    _inv
    _gold
   
    constructor() {

    this._name = "Heroe";
    this._hp = 10;
    this._exp = 0;
    this._str = 1;
    this._end = 1;
    this._inv = [];
    this._gold = 20;
    }

}

let Player = new Hero();

class Weapon {

    _str
    _end
    _gold
}