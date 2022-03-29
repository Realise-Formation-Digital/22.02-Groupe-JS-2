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

    get Exp() {
        return this._exp;
    }

    set Exp(value) {
        this._exp = this._exp + value;
    }

    get Strenght() {
        return this._str;
    }

    set Strenght(value) {
        this._str = value;
    }

    get Endurance() {
        return this._end;
    }

    set Endurance(value) {
        this._end = value;
    }

    get Inventory() {
        return this._inv;
    }

    set Inventory(value) {
        this._inv = value;
    }

    get Dollars() {
        return this._gold;
    }

    set Dollars(value) {
        this._gold = value;
    }
}

export default Hero