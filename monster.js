import Weapon from "./weapon.js"

class Monster {

    _name = [
    {
        name: "Balrog",
        img: "img/combat/balrog.jpg"
    },{
        name: "Bandit",
        img: "img/combat/bandit.jpg"
    },{
        name: "Berserker",
        img: "img/combat/berserker.jpg"
    },{
        name: "Cacodemon",
        img: "img/combat/cacodemon.jpg"
    },{
        name: "Ghoul",
        img: "img/combat/ghoul.jpg"
    },{
        name: "Golem",
        img: "img/combat/golem.jpg"
    },{
        name: "Kobold",
        img: "img/combat/kobold.jpg"
    },{
        name: "lich",
        img: "img/combat/lich.jpg"
    },{
        name: "Minion",
        img: "img/combat/minion.jpg"
    },{
        name: "Orc",
        img: "img/combat/orc.jpg"
    },{
        name: "Succubus",
        img: "img/combat/succube.jpg"
    },{
        name: "Vampire",
        img: "img/combat/vampire.jpg"
    },{
        name: "Wyrm",
        img: "img/combat/wyrm.jpg"
    }] 
    _dam
    _gold
    _end
    _exp

    constructor(hero) {
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = hero._exp + 1 * [Math.floor(Math.random() * 4) + 1];
        this._gold = hero._exp + 1 * [Math.floor(Math.random() * 49) + 1];
        this._end = hero._exp + 1 * [Math.floor(Math.random() * 3) + 1];
        this._exp = 1;
        this._inv = [new Weapon()];
    }
}


let afas = document.getElementById("Bcombat");
 
afas.addEventListener("click", () => {

    let alerte = "";
    console.log(sbir._name.img)
    changeImage(sbir._name.img)
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
    return alerte;
 });






function changeImage(imgPath) {
    document.body.background = imgPath;
}
function setImage() {
    var z = new Image();
    z.src = "img/landscape.jpg";
    document.body.background = z.src;
}
window.onload = setImage;

export default Monster