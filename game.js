
import { Weapon } from "./js/weapon.js";  
import { Hero } from "./js/hero.js";
import { Monster } from "./js/monstre.js";
import { Merchant } from "./js/merchant.js";
    
// variables
let Geralt = new Hero("Heroe");
let sword = new Weapon("Sword", 1, 15, 0, 0, 0);
Geralt.setInv(sword);
Geralt.setDamage(sword.getDamage());

console.log(Geralt);

let vendor = new Merchant();

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

    displayF.value =- displayF.value + Geralt.getDamage();
    displayE.value =- displayE.value + Geralt.getEndurance();
    displayExp.value =- displayExp.value + Geralt.getExp();
    displayA.value =- displayA.value + Geralt.getGold();
    displayHP.value =- displayHP.value + Geralt.getHP();

    return displayF.value, displayE.value, displayExp.value, displayA.value, displayHP.value;
}

//button force endurance
let power = document.getElementById("force+");
let defense = document.getElementById("endurance+");
let info = document.getElementById("info");

Geralt.setGold(200);
power.addEventListener("click", () => {
    if(Geralt.getGold() >= 100) {
        Geralt.setGold(- 100); 
        Geralt.setDamage(+ 1);
        info.innerText = "Vous avez obtenue plus un de force";
        Display();
    } else {
        info.innerText = "Vous n'avez pas assez D'argent";
    }
})

defense.addEventListener("click", () => {
    if(Geralt.getGold() >= 100) {
        Geralt.setGold(- 100);
        Geralt.setEndurance(+ 1);
        info.innerText = "Vous avez obtenue plus un de Endurance";
        Display();
    } else {
        info.innerText = "Vous n'avez pas assez D'argent";
    }
})

//button combat
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

    if(number1 >= number) {
        merOrMons.innerText = "Vous rencontree un marchand";
        avancer.classList.replace("d-block", "d-none");
        merch.classList.replace("d-none", "d-block");
    } else {
        merOrMons.innerText = "Vous rencontree un monstre";
        avancer.classList.replace("d-block", "d-none");
        monstre.classList.replace("d-none", "d-block");
        let enemie = new Monster();
        nomMons.innerHTML = enemie.getName();
        forceM.value = 0;
        enduranceM.value = 0;
        forceM.value = enemie.getDamage(); 
        enduranceM.value = enemie.getEndurance();
    }
})

let partir1 = document.getElementById("partir1");
let partir = document.getElementById("partir");
let MercInf = document.getElementById("MercInf");

partir.addEventListener("click", () => {
    merch.classList.replace("d-block", "d-none");
    avancer.classList.replace("d-none", "d-block");
    merOrMons.innerText = "";
    MercInf.innerText = "";
})

partir1.addEventListener("click", () => {
    monstre.classList.replace("d-block", "d-none");
    avancer.classList.replace("d-none", "d-block");
    merOrMons.innerText = "";
})

//marchand
const selectM  = document.getElementById('selectM');
const selectH = document.getElementById('selectH');
let myParent = document.body;
let key = "";

for(key of vendor.getInv()) {

    //console.log("outside", key, key.getId(), key.getName())

    if(vendor.getInv().hasOwnProperty(key)) {
        const inventory = vendor.getInv()[key];

        let option = document.createElement("option");
        option.text = key.getName();
        option.value = key.getId();
        select1.appendChild(option);
        
        //selectM.add( new Option (key.getName(), key.getId()));
        //selectM.add(select1)
    }
}

let select1 = document.createElement("select")
select1.id = "mySelect";
myParent.appendChild(select1);

/*for(key of Geralt.getInv()) {
    
    if(Geralt.getInv().hasOwnProperty(key)) {
        const inventory = Geralt.getInv[key]; 
        selectH.add( new Option (inventory.getInv[key], inventory));
    }
}*/

//document.getElementById("acheter").addEventListener("click", () => {

//});


selectM.addEventListener("change", () => {

    let acheter = document.getElementById("acheter");

    acheter.addEventListener("click", () => {        

            if (Geralt._gold >= 1000) {
                Geralt._inv.push(vendor._inv.splice(0,1));
                Geralt._gold = Geralt._gold - 800;
                console.log(Geralt._inv);
                console.log(Geralt._gold);
                //selectM.splice(0,1);
                console.log(selectM);
                MercInf.innerText = "produit acheter";
            } else {
                MercInf.innerText = "pas d'argent";
            }
                
            /*case 1:
                if (Geralt._gold >= 400) {
                    Geralt._inv.push(vendor._inv.splice(1,1));
                    Geralt._gold = Geralt._gold - 400;
                    console.log(Geralt._inv);
                    console.log(Geralt._gold);
                    selectM.splice(1,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 2:
                if (Geralt._gold >= 650) {
                    Geralt._inv.push(vendor._inv.splice(2,1));
                    Geralt._gold = Geralt._gold - 650;
                    console.log(Geralt._inv);
                    console.log(Geralt._gold);
                    selectM.splice(2,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 3:
                if (Geralt._gold >= 550) {
                    Geralt._inv.push(vendor._inv.splice(3,1));
                    Geralt._gold = Geralt._gold - 550;
                    console.log(Geralt._inv);
                    console.log(Geralt._gold);
                    selectM.splice(3,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
            case 4:
                if (Geralt._gold >= 1000) {
                    Geralt._inv.push(vendor._inv.splice(4,1));
                    Geralt._gold = Geralt._gold - 1000;
                    console.log(Geralt._inv);
                    console.log(Geralt._gold);
                    selectM.splice(4,1);
                    console.log(selectM);
                    MercInf.innerText = "produit acheter";
                } else {
                    MercInf.innerText = "pas d'argent";
                }
                break;
        }*/
       
    })
})

export {Geralt}

import Arme from "./arme.js"
