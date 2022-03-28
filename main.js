
// *****************Affichage stats ennemi*********************

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
    if (v.indexOf("img/image-paysage-fantasy-3-2.jpg") != -1)
        v = "img/combat/wyrm.jpg";
    else
        v = "img/combat/berserker.jpg";

    var z = new Image();
    z.src = v;
    document.body.background = z.src;
}
function setImage() {
    var z = new Image();
    z.src = "img/image-paysage-fantasy-3-2.jpg";
    document.body.background = z.src;
}
window.onload = setImage;






tbimage = new Array('images/combat/balrog.jpg', 'images/combat/bandit.jpg', 'images/combat/berserker.jpg', 'images/combat/cacodemon.jpg', 'images/combat/ghoul.jpg'
    , 'images/combat/golem.jpg', 'images/combat/kobold.jpg', 'images/combat/lich.jpg', 'images/combat/minion.jpg', 'images/combat/orc.jpg',
    'images/combat/succube.jpg', 'images/combat/vampire.jpg', 'images/combat/wyrm.jpg')

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
    img: "image/combat/bersrker.jpg"
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