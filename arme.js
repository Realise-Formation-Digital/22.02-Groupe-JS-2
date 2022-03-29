class Arme {
    
    _name;
    _dam;
    _end;
    _gold;
    _xp

    constructor(name,dam, end, gold, xp){
        console.log("Arme constructor", name,dam, end, gold, xp)
        this._name = name;
        this._dam = dam;
        this._end = end;
        this._gold = gold;
        this._xp= xp;
    }
}

// const Arme1 = new Arme ('Epee',1,0,50,1)
// console.log(Arme1);

// const Arme2 = new Arme ('Fouet',1,1,120,2)
// console.log(Arme2);

// const Arme3 = new Arme ('Hache',3,2,140,3)
// console.log(Arme3);

// const Arme4 = new Arme  ('Masse',5,3,160,4)
// console.log(Arme4);

// const Arme5 = new Arme  ('Baton',6,4,180,5)
// console.log(Arme5);

// const Arme6 = new Arme  ('Rapier',8,5,200,6)
// console.log(Arme6);

// const Arme7 = new Arme  ('Katana',10,6,220,7)
// console.log(Arme7);

// const Arme8 = new Arme  ('Dague',12,7,240,8)
// console.log(Arme8);

// const Arme9 = new Arme ('Lance',14,8,260,9)
// console.log(Arme9);

// const Arme10 = new Arme ('Great Sword',16,9,280,10)
// console.log(Arme10);

// const Arme11 = new Arme ('Ushigatana',18,10,300,11)
// console.log(Arme11);

// const Arme12 = new Arme ('Excalibur',20,20,350,12)
// console.log(Arme12);

export default Arme

