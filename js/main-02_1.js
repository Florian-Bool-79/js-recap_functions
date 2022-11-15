// Abbiamo 3 div
// Un div conterrà numeri pari, uno numeri dispari, un altro la somma dei numeri
// Chiediamo all'utente di inserire numeri finchè il numero è diverso da 0
// Stampiamo nel div dei numeri pari i numeri che sono pari, 
// nel div dei numeri dispari quelli dispari 
// e nel div della somma la somma dei numeri


/*
 * To DO
 * 
 * 1) dichiarare le variabili
 * 2) con i prompt richiedo "n" numeri all'utente fino a che inserisce 0
 * 3) pushare il numero nell' array
 * 4) creo un ciclo sull'array per controllare ogni numero inserito se è pari o dispari
 * 5) stampo ogni numero nella relativa colonna
 * 6) faccio la somma e la stampo nella terza colonna
 * 
 */


// 1) dichiarare le variabili
const numeri = [];
const colonnaPari = document.querySelector('#green');
const colonnaDispari = document.querySelector('#red');
const colonnaSomma = document.querySelector('#sum');

// 2) con i prompt richiedo "n" numeri all'utente fino a che inserisce 0
//  3) pushare il numero nell' array

let inputNumero = 0;
let somma = 0;
do {
    inputNumero = parseInt(prompt('Inserisci un numero'));
    console.log('hain inserito il numero: ', inputNumero);
    if (inputNumero !== 0) {
        numeri.push(inputNumero);
        if (inputNumero % 2 == 0) {
            stampaNumeri(colonnaPari,inputNumero);
        }else{
             stampaNumeri(colonnaDispari,inputNumero);
        }
        somma = somma + inputNumero;
    }
} while (inputNumero !== 0);


console.log('numeri', numeri);
// 4) creo un ciclo sull'array per controllare ogni numero inserito se è pari o dispari

colonnaSomma.innerText = somma;


function stampaNumeri(contenitore,numero){
    contenitore.innerText += numero;
    contenitore.innerHTML += '<br><br>';
}




// 6) faccio la somma e la stampo nella terza colonna
 

/*
 const inputNumero = prompt("inserisci un numero");
 
 if(inputNumero %2 == 0){
 inputNumero
 }
 */














/* TODO
 * 1) Creo un array vuoto
 * 2) Creo la variabile che conterrà la somma valorizzata a 0
 * 3) Creo un ciclo per chiedere numeri da sommare all'utente fino a che non inserisce lo zero
 * 4) Creo una funzione che separa pari e dispari
 * 5) Stampo  in pagina i numeri pari su bg verde e i dispari su bg rosso tramite una funzione
 */

