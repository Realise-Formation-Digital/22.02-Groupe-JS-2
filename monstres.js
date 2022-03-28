class Hero {

    _name 
    _hp
    _exp 
    _dam 
    _end 
    _inv
    _gold

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
console.log(Geralt);

// ============================================= //

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

// ============================================= //

class Monster {

    _name = 
    // Object.name
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


[
{
    name: "Balrog",
    img: "image/combat/balrog.jpg"
},{
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
}
] 
    _dam = 0;
    _gold = 0;
    _end = 0;
    _exp = 0;
    _inv = [];

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = Geralt._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._gold = Geralt._exp + 1 * [Math.floor(Math.random() * 49) + 1];
        this._end = Geralt._exp + 1 * [Math.floor(Math.random() * 3) + 1];
        this._exp = 1;
        this._inv = [arme];
    }
}
let sbir = new Monster();
console.log(sbir)
// ============================================= //

class WorldBoss {

// ============================================= //
    _name = [
        "Fred",
        "Marco",
        "Julien",
    ]
    _dam = 0;
    _gold = 0;
    _end = 0;
    _exp = 0;
    _inv = [];

    constructor() {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = 30 + this._exp
        this._gold = Geralt._exp + 1 * [Math.floor(Math.random() * 499) + 1];
        this._end = 100
        this._exp = Math.floor(Math.random() * 499) + 1;
        this._inv=[new Weapon()];
    }
}

let prof = new WorldBoss();
console.log(prof)
// ============================================= //

 let afas = document.getElementById("Bcombat");
 
afas.addEventListener("click", () => {

    let alerte = "";

    if (Geralt._dam >= sbir._end) {
        Geralt._inv.push(sbir._inv.pop())
        Geralt._gold = Geralt._gold + sbir._gold;
        sbir._gold = 0;
        delete sbir
        alerte = "Tu as gagné"
    } else{

        if (sbir._dam < Geralt._end){
            alerte = "MATCH NUL"
        } else if (sbir._dam >= Geralt._end){
            Geralt._hp = Geralt._hp - 1
            alerte = "tu es nul"
        } else {
            alerte = "fini";
        }
    }


    
    console.log(alerte, sbir);
 });



// *****************Affichage block stats ennemi*********************

function essai() {
    var statennemi = document.getElementById('menuEnnemi');
    if (statennemi.style.display === 'block') {
        statennemi.style.display = 'none';
    } else {
        statennemi.style.display = 'block';
    }
}

// ********************Changement de fond d'ecran selon situation***************


function changeImage() {
    var v = document.body.background;
    if (v.indexOf("img/landscape.jpg") != -1)
        v = "img/combat/berserker.jpg";
    else
        v = "img/landscape.jpg";

    var z = new Image();
    z.src = v;
    document.body.background = z.src;
}
function setImage() {
    var z = new Image();
    z.src = "img/landscape.jpg";
    document.body.background = z.src;
}
window.onload = setImage;


