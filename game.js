import { Weapon } from "./js/weapon.js";  
import { Hero } from "./js/hero.js";
import { Monster } from "./js/monstre.js";
import { Merchant } from "./js/merchant.js";
    
// variables

let heroe = new Hero("Heroe");
let sword = new Weapon(null, "Sword", 1, 15, 0, 0, 0);
heroe.setInv(sword);
heroe.setDamage(sword.getDamage());

console.log(heroe);

let listArmes = [new Weapon(null, "Excalibur", 60, 800, 55, heroe.getExp()),new Weapon(null, "Masamune", 40, 400, 30, heroe.getExp()),new Weapon(null, "Energy Sword", 50, 650, 30, heroe.getExp()),new Weapon(null, "Laser Saber", 45, 550, 45, heroe.getExp()), new Weapon(null, "Artemis", 75, 1000, 75, heroe.getExp())];
let vendor = new Merchant(listArmes, heroe.getExp());
console.log(vendor);
console.log('les armes du vendeur', vendor.getInv());

//input interface

//display att hero
let displayF = document.getElementById("force");
let displayE = document.getElementById("endurance");
let displayExp = document.getElementById("experience");
let displayA = document.getElementById("argent");
let displayHP = document.getElementById("vie");

function Display() {
    displayF.value = 0;
    displayE.value = 0;
    displayExp.value = 0;
    displayA.value = 0;
    displayHP.value = 0;

    displayF.value =- displayF.value + heroe.getDamage();
    displayE.value =- displayE.value + heroe.getEndurance();
    displayExp.value =- displayExp.value + heroe.getExp();
    displayA.value =- displayA.value + heroe.getGold();
    displayHP.value =- displayHP.value + heroe.getHP();

    return displayF.value, displayE.value, displayExp.value, displayA.value, displayHP.value;
}

//button force endurance
let power = document.getElementById("force+");
let defense = document.getElementById("endurance+");
let info = document.getElementById("info");

power.addEventListener("click", () => {
    if(heroe.getGold() >= 100) {
        heroe.setGold(- 100); 
        heroe.setDamage(+ 1);
        info.innerText = "Vous avez obtenue plus un de force";
        Display();
    } else {
        info.innerText = "Vous n'avez pas assez D'argent";
    }
})

defense.addEventListener("click", () => {
    if(heroe.getGold() >= 100) {
        heroe.setGold(- 100);
        heroe.setEndurance(+ 1);
        info.innerText = "Vous avez obtenue plus un de Endurance";
        Display();
    } else {
        info.innerText = "Vous n'avez pas assez D'argent";
    }
})

//button avancer
let avancer = document.getElementById("avancer");
// info monstre ou marchand
let merOrMons = document.getElementById("merOrMons");
// interface marchand
let merch = document.getElementById("merch");
//interface monstre
let monstre = document.getElementById("monstre");
let forceM = document.getElementById("forceM");
let enduranceM = document.getElementById("enduranceM");
let nomMons = document.getElementById("nomMons")

avancer.addEventListener("click", () => {

    Display();
    let number = 17;
    let number1 = Math.floor(Math.random() * 19)+ 1;
    info.innerText = "";
    let enemie = new Monster(heroe.getExp());
    console.log(enemie);

    if(number1 >= number) {
        merOrMons.innerText = "Vous rencontree un marchand";
        avancer.classList.replace("d-block", "d-none");
        merch.classList.replace("d-none", "d-block");
    } else {
        merOrMons.innerText = "Vous rencontree un monstre";
        avancer.classList.replace("d-block", "d-none");
        monstre.classList.replace("d-none", "d-block");
        nomMons.innerHTML = enemie.getName();
        forceM.value = 0;
        enduranceM.value = 0;
        forceM.value = enemie.getDamage(); 
        enduranceM.value = enemie.getEndurance();

        let attaquer = document.getElementById("attaquer")
        attaquer.addEventListener("click", () => {

            merOrMons.innerText = "";
            //console.log(sbir._name.img)
            //changeImage(sbir._name.img)
            //console.log(sbir.getName().img)
            //changeImage(sbir.getName().img)

            if (heroe.getDamage() >= enemie.getEndurance()) {
                if(enemie.getInv() !== []){
                    heroe.setInv(enemie.setInv())
                }
                heroe.setGold(enemie.getGold());
                merOrMons.innerText = "Victoire";
                console.log(heroe);
            } else{

                if (enemie.getDamage() < heroe.getEndurance())
                {
                    merOrMons.innerText = "Egalité";
                } else {
                    heroe.setHP()
                    merOrMons.innerText = "Défaite";
                }
            }
        })
    }
});

let partir1 = document.getElementById("partir1");
let partir = document.getElementById("partir");
let MercInf = document.getElementById("MercInf");

partir.addEventListener("click", () => {
    merch.classList.replace("d-block", "d-none");
    avancer.classList.replace("d-none", "d-block");
    merOrMons.innerText = "";
    MercInf.innerText = "";
    Display();
})

partir1.addEventListener("click", () => {
    monstre.classList.replace("d-block", "d-none");
    avancer.classList.replace("d-none", "d-block");
    merOrMons.innerText = "";
    Display();
})

//marchand

/*const selectM  = document.getElementById('selectM');
const selectH = document.getElementById('selectH');
let myParent = document.body;
let key = "";

for(key of vendor.getInv()) {

    console.log("outside", key, key.getId(), key.getName())

    if(vendor.getInv().hasOwnProperty(key)) {
        const inventory = vendor.getInv()[key];

        let buttons = document.createElement("button");
        option.text = key.getName();
        option.value = key.getId();
        selectM.appendChild(option);
        
        selectM.add( new Option (key.getName(), key.getId()));
    }
}

let buttons = document.createElement("select")
select1.id = "mySelect";
myParent.appendChild(select1);

for(key of heroe.getInv()) {
    
    if(heroe.getInv().hasOwnProperty(key)) {
        const inventory = heroe.getInv[key]; 
        selectH.add( new Option (inventory.getInv[key], inventory));
    }
}

document.getElementById("acheter").addEventListener("click", () => {

});


selectM.addEventListener("change", () => {

    let acheter = document.getElementById("acheter");

    acheter.addEventListener("click", () => {        

            if (heroe._gold >= 1000) {
                heroe._inv.push(vendor._inv.splice(0,1));
                heroe._gold = heroe._gold - 800;
                console.log(heroe._inv);
                console.log(heroe._gold);
                //selectM.splice(0,1);
                console.log(selectM);
                MercInf.innerText = "produit acheter";
            } else {
                MercInf.innerText = "pas d'argent";
            }
                
            case 1:
                if (heroe._gold >= 400) {
                    heroe._inv.push(vendor._inv.splice(1,1));
                    heroe._gold = heroe._gold - 400;
                    console.log(heroe._inv);
                    console.log(heroe._gold);
                    selectM.splice(1,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 2:
                if (heroe._gold >= 650) {
                    heroe._inv.push(vendor._inv.splice(2,1));
                    heroe._gold = heroe._gold - 650;
                    console.log(heroe._inv);
                    console.log(heroe._gold);
                    selectM.splice(2,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 3:
                if (heroe._gold >= 550) {
                    heroe._inv.push(vendor._inv.splice(3,1));
                    heroe._gold = heroe._gold - 550;
                    console.log(heroe._inv);
                    console.log(heroe._gold);
                    selectM.splice(3,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 4:
                if (heroe._gold >= 1000) {
                    heroe._inv.push(vendor._inv.splice(4,1));
                    heroe._gold = heroe._gold - 1000;
                    console.log(heroe._inv);
                    console.log(heroe._gold);
                    selectM.splice(4,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
        }
       
    })
})*/