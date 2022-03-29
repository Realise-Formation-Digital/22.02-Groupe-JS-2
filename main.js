
import Weapon from "./monster";
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
    if (v.indexOf("img/combat/berserker.jpg") != -1)
        v = "img/combat/succube.jpg";
    else
        v = "img/combat/berserker.jpg";

    var z = new Image();
    z.src = v;
    document.body.background = z.src;
}
function setImage() {
    var z = new Image();
    z.src = "img/combat/vampire.jpg";
    document.body.background = z.src;
}
window.onload = setImage;






tbimage = new Array('img/combat/balrog.jpg', 'img/combat/bandit.jpg', 'img/combat/berserker.jpg', 'img/combat/cacodemon.jpg', 'img/combat/ghoul.jpg'
    , 'img/combat/golem.jpg', 'img/combat/kobold.jpg', 'img/combat/lich.jpg', 'img/combat/minion.jpg', 'img/combat/orc.jpg',
    'img/combat/succube.jpg', 'img/combat/vampire.jpg', 'img/combat/wyrm.jpg')

function pouic() {
    document.body.style.cssText = 'background:url(' + tbimage[Math.round(Math.random() * (tbimage.length - 1))] + ')'
}

Object.name;

[{
    name: "Bolrog",
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