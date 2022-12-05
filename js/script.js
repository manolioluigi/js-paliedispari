//1

//Dichiariamo le variabili
let bottone, parola;

//Creare la funzione
function palindroma(parola){

    //Trasformiamo in un array
    const arrayParola = parola.split('');
    console.log(arrayParola);
    //Usiamo reverse
    const reverseArrayParola = arrayParola.reverse();
    //Ritrasformiamo l'array in una parola
    const reverseParola = reverseArrayParola.join('');

    //Controlliamo che siano uguali
    if (parola == reverseParola){
        console.log("E' palindroma");
        document.getElementById('risultato-parola').innerHTML = "La parola è palindroma";
    }
    else{
        console.log("Non è palindroma");
        document.getElementById('risultato-parola').innerHTML = "La parola non è palindroma";
    }

}

//Associamo la funzione al bottone

bottone = document.getElementById("bottone");
bottone.addEventListener(`click`, function(){

    //Recuperariamo la parola
    parola = document.getElementById('parola').value.toString();
    console.log(parola);

    //Eseguiamo la funzione
    palindroma(parola);

}
);

//2

//Dichiariamo le variabili
let numeroUtente, sceltaUtente, numeroRandom, risultato;

//Creiamo la funzione per generare un numero random;

function generatoreRandom(){
    numeroRandom = Math.floor(Math.random() * 5 + 1);
    console.log(numeroRandom);
    return numeroRandom;
}

//Creiamo la funzione per stabilire se la somma dei numeri è pari o dispari

function sommaNumeri(){
    
    if((numeroUtente + numeroRandom) % 2 == 0){
        risultato = "pari";
    }
    else{
        risultato = "dispari";
    }

    return risultato;
}

bottone = document.getElementById("bottone-PD");
bottone.addEventListener(`click`, function(){

//Recuperiamo i valori dell'utente
numeroUtente = parseInt(document.getElementById('numero').value)
console.log(numeroUtente);
sceltaUtente = document.getElementById('pari-dispari').value.toLowerCase();


generatoreRandom(numeroRandom);
sommaNumeri(numeroUtente, numeroRandom);

if(risultato == sceltaUtente){
    document.getElementById('risultato').innerHTML = "Hai vinto!"
}else{
    document.getElementById('risultato').innerHTML = "Hai perso!"
}
console.log(sceltaUtente);
}
);