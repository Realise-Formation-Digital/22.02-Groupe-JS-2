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

let Geralt = new Hero();
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
    _dam
    _gold
    _end
    _exp

    constructor () {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this.Proto();
    }

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
            this._end = 12;
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
    }
}

let arme = new Weapon();
let arme2 = new Weapon();

console.log(arme);
console.log(arme2);

class Monster {

    _name = 
    // [
    //     "Balrog",
    //     "Orc",
    //     "minion",
    //     "Wyvern",
    //     "Kobold",
    //     "Lich",
    //     "Berserker",
    //     "Cacodemon",
    //     "Bandit",
    //     "ghoul",
    //     "Vampire",
    //     "Banshee",
    //     "Golem",
    //     "Succubus"
    // ]

[{
    name: "Balrog",
    img: "image/combat/balrog.jpg"
},
{
    name: "Bandit",
    img: "image/combat/bandit.jpg"
},{
    name: "Berserker",
    img: "image/combat/berserker.jpg"
},{
    name: "Cacodemon",
    img: "image/combat/cacodemon.jpg"
},{
    name: "Ghoul",
    img: "image/combat/ghoul.jpg"
},{
    name: "Golem",
    img: "image/combat/golem.jpg"
},{
    name: "Kobold",
    img: "image/combat/kobold.jpg"
},{
    name: "lich",
    img: "image/combat/lich.jpg"
},{
    name: "Minion",
    img: "image/combat/minion.jpg"
},{
    name: "Orc",
    img: "image/combat/orc.jpg"
},{
    name: "Succubus",
    img: "image/combat/succube.jpg"
},{
    name: "Vampire",
    img: "image/combat/vampire.jpg"
},{
    name: "Wyrm",
    img: "image/combat/wyrm.jpg"
}]
    _dam
    _gold
    _end
    _exp

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._gold = Geralt._exp + 1 * [Math.floor(Math.random() * 49) + 1];
        this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 3) + 1];
        this._exp = 1;
        this._inv = [new Weapon()];
    }
}

let enemie = new Monster();
console.log(enemie);

class Merchant {

    _name = [
        "Harry",
        "Fenrir",
        "Odin",
        "Madeleine",
        "Dante"
    ]
    _exp
    _inv

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._inv = [new Weapon(), new Weapon(), new Weapon(),new Weapon(), new Weapon()];
    }
}

let vendor = new Merchant();
console.log(vendor);