
let websiteHatter= ["WebsiteWW01.jpg","WebsiteWW02.jpg","WebsiteWW03.jpg","WebsiteWW04.jpg","WebsiteWW05.jpg"]
function hatterKepRandom(){
    let veletlenSzam = Math.floor(Math.random() * websiteHatter.length );
    document.getElementById("hattterKepHelye").background="kepek/"+websiteHatter[veletlenSzam]
    // document.getElementById("hatterKepHelye").stlye="background-size: cover;background-position: center;background-repeat: no-repeat;"
}


setTimeout(() => {idoKorlat()}, 5000);
hatterKepRandom()
//---Szoveg
document.getElementById("szoveg").innerHTML=`<h1 id="foCim">Könnyű Játék</h1>`

//---VisszaGomb
document.getElementById("visszaGomb").innerHTML=`<button style="background-color: transparent;"><a href="index.html" style="color:wheat">Vissza Gomb</a></button>`
//---ujraGomb
document.getElementById("ujraGomb").innerHTML=`<button style="background-color: transparent;"><a href="konnyuJatek.html" style="color:wheat">Újra Gomb</a></button>`
//---kepekGeneralasa 

let kepek = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"]//Képek nevei
let kepekMennyisege = 4 //Mennyi fajta kép lehet ebben a játék módban
let KivalasztottKep = []
let veletlenSzamaim = []
for (let i = 0; i < kepekMennyisege; i++) {
    let veletlenSzam = Math.floor(Math.random() * kepek.length);
   
    if (veletlenSzamaim.includes(veletlenSzam)){
        i+=-1
    }else{
        KivalasztottKep.push(kepek[veletlenSzam]+".jpeg")
    }
    

    veletlenSzamaim.push(veletlenSzam)
}
//Tomb kiirasa es osszekeverese 
KivalasztottKep.forEach(element => {
    console.log(element)
});
KivalasztottKep.forEach(element => {
    KivalasztottKep.push(element)
});
console.log("------------------KivalasztottKep 2x")
KivalasztottKep.forEach(element => {
    console.log(element)
});
let KivalasztottKepTomb = []
KivalasztottKep.forEach(element => {
    KivalasztottKepTomb.push(element)
    
});
console.log("-----KivalasztottKepTomb")
KivalasztottKepTomb.forEach(element => {
    console.log(element)
});




let randomKivalasztottKep= []

for (let i = 0; i < 3; i++) {
KivalasztottKepTomb.sort(() => Math.random() - 0.5);
    console.log("------Keverés után------");
    KivalasztottKepTomb.forEach(element => {
        console.log(element);
        
    });
}

KivalasztottKepTomb.forEach(element => {
    
    randomKivalasztottKep.push(element)
});
// console.log("RandomTomb")
// randomKivalasztottKep.forEach(element => {
//     console.log(element)
// });
//----------gombokKirajzolasa                      randomKivalasztottKep


let sz = ""

const sor = 4
const osz = 2

console.log("-------gombokKirajzolasa--------");

let sorszam =0

for (let i = 0; i < sor; i++) {
    
    for (let j = 0; j < osz; j++) {
        let helyesId =sorszam+j
        
        // console.log(KivalasztottKep[veletlenSzam])


        sz+= `
        <button id="gomb${helyesId}" style="background-color: transparent; border: none; padding: 5px; width: 50px; height: 50px; " onclick="kepCsekkol(${helyesId})"><img id="kep${helyesId}" style=" width: 50px; height: 50px;" src="kepek/hatlap.jpeg" alt=""></button>`
        let teszt = sorszam+j
        console.log(teszt)
    }   

    sorszam+=osz

    sz+=`<br>`
}
document.getElementById("Jatek").innerHTML+=sz

//---Parositas
let db = 1
let elsoKepem = ""
let elsoKepemIndex =""
let masodikKepem = ""
let masodikKepemIndex = ""
let KitalaltKepekSzama = 0
function kepCsekkol(Index){

let helyesKep = randomKivalasztottKep[Index]
console.log(helyesKep)

let AzKepIndex= document.getElementById("kep"+Index)
AzKepIndex.src = "kepek/" + helyesKep

console.log()

if(db%2==0){
    masodikKepem = helyesKep //Kép neve
    masodikKepemIndex = AzKepIndex // Kép indexe
    console.log("csoki")
    if(masodikKepem == elsoKepem&&masodikKepemIndex!=elsoKepemIndex){
        KitalaltKepekSzama++
        console.log("Siker")
        frissitProgressBar()
        if(KitalaltKepekSzama == kepekMennyisege ){
            setTimeout(() => {
                db++
            alert(`Gratulálok sikerült! Próbálkozások száma: ${db/2}.`)
            console.log(`Gratulálok sikerült! Próbálkozások száma: ${db/2}.`)
                
        }, 1000);
        }
    }else {
        setTimeout(() => {
            elsoKepemIndex.src = "kepek/hatlap.jpeg";
            masodikKepemIndex.src = "kepek/hatlap.jpeg";
            console.log("Kudarc");
        }, 500); // 0,5 másodperc (500 ms) késleltetés
    }
}else{
    elsoKepem = helyesKep //Kép neve
    elsoKepemIndex = AzKepIndex // Kép indexe
}
console.log("-")
console.log(db)
console.log(KitalaltKepekSzama)

db++



}

//----progressBar

let kitalaltDb = 0;
const maxTalalat = 4; // például 8 találat van összesen

function frissitProgressBar() {
  kitalaltDb++;
  const szazalek = (kitalaltDb / maxTalalat) * 100;
  const elem = document.getElementById("myBar");
  elem.style.width = szazalek + "%";
  elem.innerHTML = Math.floor(szazalek) + "%";
}

//---IdoKorlat
let jelenlegIdo = 0;
let ido = 120000; // 2 perc
let intervallum;

function idoKorlat() {
    
  intervallum = setInterval(() => {
    jelenlegIdo += 1000;

    const szazalek = (jelenlegIdo / ido) * 100;
    const elem = document.getElementById("myIdoBar");
    elem.style.width = szazalek + "%";
    elem.innerHTML = Math.floor(szazalek) + "%";
    if(KitalaltKepekSzama == kepekMennyisege ){
        clearInterval(intervallum);
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
    if (jelenlegIdo >= ido) {
      clearInterval(intervallum);
      // Itt tiltsd le a játékot
      console.log("Lejárt az idő!");
      // Példa: játék tiltása
      document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
  }, 1000);

}
