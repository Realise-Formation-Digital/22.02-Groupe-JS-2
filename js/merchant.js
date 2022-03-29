/**
 * @class
 * @classdesc MErchant class
 * @author Loic
 */
class Merchant {

    _name = [
        "Harry",
        "Fenrir",
        "Odin",
        "Loki",
        "Dante"
    ]
    _exp = 0;
    _inv = [];

    constructor(listArmes = [], heroe) {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = heroe + 1 * [Math.floor(Math.random() * 3) + 1];
        listArmes.map(a => {
            if (Math.floor(Math.random() * 2) == 0) {
                this._inv.push(a);
            }
        });
    }

    getExp(){
        return this._exp;
    }

    getInv() {
        return this._inv;
    }
    
    setInv (newValue){
        this._inv.push(newValue);
    }
}

export {Merchant};