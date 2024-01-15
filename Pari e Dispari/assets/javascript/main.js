/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const pariHtml = document.getElementById("pari")
const dispariHtml = document.getElementById("dispari")
const inviaHtml = document.getElementById("invia")
const numeroScelto = document.getElementById("myNumber")
const risultatoHtml = document.getElementById("risultato")

let variabileControllore;
let risultatoSomma = 0;
inviaHtml.addEventListener("click", function(){
    risultatoSomma = somma(parseInt(numeroScelto.value), RandomNumber(1, 5));
    if(isPari(risultatoSomma)){
        variabileControllore = true;
    }else{
        variabileControllore = false;
    }
    console.log(variabileControllore)
})

pariHtml.addEventListener("click", function(){
    if(variabileControllore === true){
        risultatoHtml.innerHTML = `<span class = "text-success fs-1 bg-light rounded p-2 fw-bold text-uppercase"> Hai vinto!! La somma è ${risultatoSomma}</span>`
    }else{
        risultatoHtml.innerHTML = `<span class = "text-danger fs-1 bg-light rounded p-2 fw-bold text-uppercase"> Hai perso!! La somma è ${risultatoSomma}</span>`
    }
})

dispariHtml.addEventListener("click", function(){
    if(variabileControllore === true){
        risultatoHtml.innerHTML = `<span class = "text-danger fs-1 bg-light rounded p-2 fw-bold text-uppercase"> Hai perso!! La somma è ${risultatoSomma}</span>`
    }else{
        risultatoHtml.innerHTML = `<span class = "text-success fs-1 bg-light rounded p-2 fw-bold text-uppercase"> Hai vinto!! La somma è ${risultatoSomma}</span>`
    }
})



function somma(num1, num2){
    return num1 + num2
}

function RandomNumber (min, max){
    return Math.floor( Math.random()*(max - min + 1) + min)
}

function isPari(num) {
    return num % 2 === 0;
}

