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
    }
    else{
        console.log("Non è palindroma");
    }

}

//Associamo la funzione al bottone

bottone = document.getElementById("bottone");
bottone.addEventListener(`click`, function(){

    //Recuperariamo la parola
    parola = document.getElementById('parola').toString();
    console.log(parola);

    //Eseguiamo la funzione
    palindroma(parola);

}
);
