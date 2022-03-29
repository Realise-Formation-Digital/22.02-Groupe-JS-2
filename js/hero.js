class Hero {

    _hp = 10;
    _exp = 0;
    _dam = 1;
    _end = 1;
    _inv = [];
    _gold = 20;

    /**
     * Constructor
     * @param {String} _name - Hero's name
    */

    constructor(_name) {
        this._name = _name;
    }

    setHP() {
        this._hp = this._hp - 1;
    }

    getHP() {
        return this._hp;
    }
    
    getInv() {
        return this._inv;
    }
    
    setInv (newValue){
        this._inv.push(newValue);
    }

    getExp(){
        return this._exp;
    }

    setExp() {
        this._exp = this._exp + 1;
    }

    getGold() {
        return this._gold;
    }

    setGold(newValue) {
        this._gold = this._gold + newValue;
    }

    getDamage() {
        return this._dam;
    }

    setDamage(newValue) {
        this._dam = this._dam + newValue;
    }

    getEndurance() {
        return this._end;
    }

    setEndurance(newValue) {
        this._end = this._end + newValue;
    }
}

export {Hero};