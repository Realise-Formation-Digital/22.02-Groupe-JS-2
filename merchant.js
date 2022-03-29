import Arme from "./arme.js";

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
        this._inv = [
            new Arme('Epee',1,0,50,1), 
            new Arme('Fouet',1,1,120,2), 
            new Arme('Hache',3,2,140,3),
            new Arme('Masse',5,3,160,4), 
            new Arme('Baton',6,4,180,5), 
            new Arme('Rapier',8,5,200,6), 
            new Arme('Katana',10,6,220,7), 
            new Arme('Dague',12,7,240,8), 
            new Arme('Lance',14,8,260,9), 
            new Arme('Great Sword',16,9,280,10), 
            new Arme('Ushigatana',18,10,300,11), 
            new Arme('Excalibur',20,20,350,12)];
    }
}

export default Merchant