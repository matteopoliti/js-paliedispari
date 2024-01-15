/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

let parola = prompt("Scrivi una parola, ti dirò se è palindroma");

function parolaReverse(str) {
    let nuovaParola = "";
    for (let i = str.length - 1; i >= 0; i--) {
        nuovaParola += str[i];
    }
    return nuovaParola;
}


if(parola == parolaReverse(parola)){
    alert(`La parola ${parola} è palindroma`);
}else{
    alert(`La parola ${parola} non è palindroma`);
}