// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// RIFERIMENTI DAL DOM
const bottonePerGiocare = document.getElementById("bottone-gioco");
const containerGriglia = document.querySelector(".row");


// EVENTO CLICK SUL BOTTONE PER INIZIARE LA PARTITA
bottonePerGiocare.addEventListener("click",
    function(){

        // crezione griglia con funzione
        createGrid(1, 100, containerGriglia)


        // aggiungo la classe display non al bottone
        bottonePerGiocare.classList.add("invisible");
        // rimuovo la classe display none dalla griglia
        containerGriglia.classList.remove("invisible");
        
    }
)





// FUNZIONI

// crea un elemento html con una classe associata
function addHtmlElementWithClass (tag, elementClass){
    // creo un elemento
    const elemento = document.createElement(tag);
    // gli aggiugo una classe
    elemento.classList.add(elementClass);

    return elemento;
}

// funzione creazione girglia
function createGrid (min, max, contenitoreElementi){

    // creo un array con una serie di numeri random
    const bombe = randomNumbersArray(100, 1, 16);


    for(let i = min; i <= max; i++){
        const divBox = addHtmlElementWithClass("div", "box");

        divBox.append(i);

        divBox.addEventListener("click",
            function(){
                divBox.classList.add("active");
                console.log(i);

                if(bombe.includes(i)){
                    divBox.classList.add("bomb");
                }
            }
        )

        contenitoreElementi.append(divBox);

        }

        return contenitoreElementi;
    }


// funzione creazione array di numeri random tra un minimo e un massimo
function randomNumbersArray (rangeNumber, min, max){

    const arrayNum = [];


    while(arrayNum.length < max){
        // creo un numero random tra un minimo e un massimo
        let randomNum = Math.floor((Math.random() * rangeNumber) + min);
    
        // controllo che il numero non sia già presente nell'array
        if(!arrayNum.includes(randomNum)){
            arrayNum.push(randomNum);
        }
    }
    
    console.log(arrayNum);

    return arrayNum;
}

