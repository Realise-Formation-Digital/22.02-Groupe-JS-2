class Weapon {

    _id = 0;
    _name = [
        "Scimitar",
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
    _exp = 0;

    /**
     * Constructor
     * @param {Hero} heroe 
     * @param {String} name 
     * @param {Number} dam 
     * @param {Number} gold 
     * @param {Number} end 
     * @param {Number} exp 
     */
    constructor (heroe = null, name = null, dam = null, gold = null, end = null, exp = null) {
        this._id = Weapon.UniqueID();
        this._name = name ? name : this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = dam ? dam : (heroe ? this.GoldPocket(heroe.getExp()) : 0);
        this._gold = gold ? gold : (heroe ? this.GoldPocket(heroe.getExp()) : 0);
        this._end = end ? end : (heroe ? this.GoldPocket(heroe.getExp()) : 0);
        this._exp = exp ? exp : (heroe ? this.EquipOrNot(heroe.getExp()) : 0);
    }

    static UniqueID() {
        if (!this.lastId) this.lastId = 1
        else this.lastId++
        return this.lastId
    }

    getExp(){
        return this._exp;
    }

    getDamage() {
        return this._dam;
    }

    getName(){
        return this._name
    }

    getId(){
        return this._id
    }

    /**
     * 
     * @param {*} heroe 
     * @returns 
     */

    EquipOrNot(heroe) {
        let orNot = 10;
        let equip = Math.floor(Math.random() * 19)+ 1;

        if (heroe <= 5) {
            this._exp = Math.floor(Math.random() * 2)+ 1;
        } else if (equip >= orNot) {
            this._exp = heroe + 1 * [Math.floor(Math.random() * -2) - 1];
        } else {
            this._exp = heroe + 1 * [Math.floor(Math.random() * 2) + 1];
        }
        return this._exp;
    }

    GoldPocket(heroe) {
        switch(heroe) {
            case 0 :
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 2) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 2) + 1];
                this._gold = Math.floor(Math.random() * 29) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 3) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 3) + 1];
                this._gold = Math.floor(Math.random() * (49 - 29 +1)) + 30;
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 4) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 4) + 1];
                this._gold = Math.floor(Math.random() * (99 - 49 +1)) + 50;
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 5) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 5) + 1];
                this._gold = Math.floor(Math.random() * (149 - 99 +1)) + 100;
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
            case 36 :
            case 37 :
            case 38 :
            case 39 :
            case 40 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 6) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 6) + 1];
                this._gold = Math.floor(Math.random() * (199 - 149 +1)) + 150;
                break;
            case 41 :
            case 42 :
            case 43 :
            case 44 :
            case 45 :
            case 46 :
            case 47 :
            case 48 :
            case 49 :
            case 50 :
                this._end = heroe + 1 * [Math.floor(Math.random() * 7) + 1];
                this._dam = heroe + 1 * [Math.floor(Math.random() * 7) + 1];
                this._gold = Math.floor(Math.random() * (249 - 199 +1)) + 200;
                break;
        }
        return this._gold, this._dam, this._end;
    } 
}

export { Weapon };