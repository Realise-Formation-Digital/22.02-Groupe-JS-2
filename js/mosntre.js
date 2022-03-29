import { Weapon } from "./weapon.js";

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
    _dam = 0;
    _gold = 0;
    _end = 0;
    _exp = 0;
    _inv = [];

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = 1; 
        this._inv.push(this.Bool());
        this.FairPlay(expHero);
    }

    getName() {
        return this._name;
    }

    getInv() {
        return this._inv;
    }

    getDamage() {
        return this._dam;
    }

    getEndurance() {
        return this._end;
    }
    
    setInv (){
        this._inv.pop(this._inv);
    }

    FairPlay(expHero) {

        let inside = 17;
        let outside = Math.floor(Math.random() * 19)+ 1;

        switch(expHero) {
            case 0 :
            case 1 :
            case 2 :
                this._end = expHero + 1 * [Math.floor(Math.random() * 3) + 1];
                this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 3) + 1];
                this._gold = Math.floor(Math.random() * 29) + 1;
                break;
            case 3 :
            case 4 :
            case 5 :
                this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 5) + 1];
                this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 5) + 1];
                this._gold = Math.floor(Math.random() * 39) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -1) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -1) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 6) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 6) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -2) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -2) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 9) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 9) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -2) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -2) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 10) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 10) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -3) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -3) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 13) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 13) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -3) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -3) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 15) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 15) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -3) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -3) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 17) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 17) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 36 :
            case 37 :
            case 38 :
            case 39 :
            case 40 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -3) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -3) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 20) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 20) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 41 :
            case 42 :
            case 43 :
            case 44 :
            case 45 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -4) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -4) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 21) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 21) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
            case 46 :
            case 47 :
            case 48 :
            case 49 :
            case 50 :
                if (outside >= inside) {
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -4) - 1];
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -4) -1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                } else {
                    this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 24) + 1];
                    this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 24) + 1];
                    this._gold = Math.floor(Math.random() * 49) + 1;
                }
                break;
        }
        return this._dam, this._end, this._gold;
    }
    
    Bool() { 
        let number = 10
        let number1 = Math.floor(Math.random() * 19)+ 1;
        if ( number1 >= number) {
            new Weapon()
        }else {
            this._inv = [];
        }
        return new Weapon();
    }
}

export {Monster};