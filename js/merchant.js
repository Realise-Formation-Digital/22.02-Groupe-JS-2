import { Weapon } from "./weapon.js";
    import { Geralt } from "/game.js";

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


    constructor(listArmes = []) {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        //this._inv = [new Weapon("Excalibur", 60, 800, 55, 40),new Weapon("Masamune", 40, 400, 30, 20),new Weapon("Energy Sword", 50, 650, 30, 30),new Weapon(" Laser Saber", 45, 550, 45, 35), new Weapon("Artemis", 75, 1000, 75, 50)];
        this._inv = listArmes
    }

    getInv() {
        return this._inv;
    }
    
    setInv (newValue){
        this._inv.push(newValue);
    }
}

export {Merchant};