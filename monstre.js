class WorldBoss {

    _name;
    _end;
    _exp;
    _str;
    _arme;
    _gold;
    _inv;

    constructor() {
        this._name = "Balrog"
        this._end = 100
        this._exp = Math.random(1, 50)
        this._str = 1 + this.xp
        this._arme = 1
        this._gold = Math.random(50, 150)
        this._inv=[];
    }

    combattre () { 

        if(this._end = 5){
            this._end = 50
        }

        if(Hero=arme){
            pop(inv)=push(inv) // à modifier
        }
    }
}

Balrog = newMonstre();

// ============================================= //

class Minion extends WorldBoss{

    constructor() {
        this._name = "Sbir"
        this._end = Math.random(1, 40)
        this._exp = Math.random(1, 50)
        this._str = 1 + this.exp
        this._arme = Math.random(0, 1)
        this._gold = Math.random(0, 50)
        this._inv=[];
    }
}

Sbir = newMinion();

// ============================================= //

function combattre(){

    if (heroStr + armeStr >= monstreEndu) {
        monstreDead = endFight
    } else if(heroStr + armeStr < monstreEndu){ 
        monstreLive
    } else if(monstreStr >= heroEndu){
        endFight = hero = hp - 1
    } else if(monstreStr < heroEndu){
        heroLive
    }else{
        endFight
    }
}

