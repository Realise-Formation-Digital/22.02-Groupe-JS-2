class Hero {

    _name = "";
    _hp = 0;
    _exp = 0;
    _dam = 0;
    _end = 0;
    _inv = [];
    _gold = 0;

    constructor() {
        this._name = "Heroe";
        this._hp = 10;
        this._exp = 0;
        this._dam = 1;
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
        return this._dam;
    }

    set Strenght(value) {
        this._dam = value;
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

let Geralt = new Hero();
Geralt._exp = 30;
console.log(Geralt);

class Weapon {

    _name = [
        "Sword",
        "Dagger",
        "Kukri",
        "Longsword",
        "Spear",
        "Axe",
        "Rapier",
        "Estoc",
        "Katana",
        "Nodachi",
        "Greatsword",
        "Hammer",
        "Kanabo"
    ];
    _dam = 0;
    _gold = 0;
    _end = 0;

    constructor () {

        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._gold = Math.floor(Math.random() * 129) + 1;
        this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 3) + 1];
        this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 5) + 1];
        this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 5) + 1];
        //this.Proto();
    }

    /*
    Proto() {
        if(this._name == "Sword") {
            this._dam = 1;
            this._gold = 10;
            this._end = 0;
            this._exp = 0;
        }
        if(this._name == "Dagger") {
            this._dam = 0;
            this._gold = 20;
            this._end = 2;
            this._exp = 1;
        }
        if(this._name == "Kukri") {
            this._dam = 1;
            this._gold = 25;
            this._end = 1;
            this._exp = 2;
        }
        if(this._name == "Longsword") {
            this._dam = 2;
            this._gold = 35;
            this._end = 1;
            this._exp = 3;
        }
        if(this._name == "Spear") {
            this._dam = 1;
            this._gold = 35;
            this._end = 2;
            this._exp = 3;
        }
        if(this._name == "Axe") {
            this._dam = 3;
            this._gold = 40;
            this._end = 1;
            this._exp = 4; 
        }
        if(this._name == "Rapier") {
            this._dam = 3;
            this._gold = 50;
            this._end = 2;
            this._exp = 5;
        }
        if(this._name == "Estoc") {
            this._dam = 4;
            this._gold = 65;
            this._end = 2;
            this._exp = 6;
        }
        if(this._name == "Katana") {
            this._dam = 5;
            this._gold = 80;
            this._end = 2;
            this._exp = 7;
        }
        if(this._name == "Nodachi") {
            this._dam = 8;
            this._gold = 110;
            this._end = 0;
            this._exp = 8;
        }
        if(this._name == "Greatsword") {
            this._dam = 6;
            this._gold = 130;
            this._end = 3;
            this._exp = 9;
        }
        if(this._name == "Hammer") {
            this._dam = 5;
            this._gold = 135;
            this._end = 5;
            this._exp = 10;
        }
        if(this._name == "Kanabo") {
            this._dam = 7;
            this._gold = 150;
            this._end = 4;
            this._exp = 11;
        }
        return this._dam, this._gold, this._end, this._exp;
    }*/
}

let arme = new Weapon();
let arme2 = new Weapon();

console.log(arme);
console.log(arme2);

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
        this._gold = Math.floor(Math.random() * 49) + 1;
        this._exp = 1; 
        this._inv.push(this.Bool());
        this.FairPlay();
    }

    FairPlay() {
        let inside = 10
        let outside = Math.floor(Math.random() * 19)+ 1;
        if (outside >= inside && Geralt._exp <= 5) {
            this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * -3) - 1];
            this._end = Geralt._exp + 1 * [Math.floor(Math.random() * -3) -1];
        } else {
            this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 3) + 1];
            this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        }
        return this._dam, this._end;
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

let enemie = new Monster();
console.log(enemie);

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

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._inv = [new Weapon(), new Weapon(), new Weapon(),new Weapon(), new Weapon()];
    }
}

let vendor = new Merchant();
console.log(vendor);