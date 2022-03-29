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

export default Weapon