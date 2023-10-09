// console.log('ciao')

// Numeri casuali del giocatore
const giocatore = Math.floor(Math.random() * (6 - 1) + 1);
console.log('Player ' + giocatore)

// Numeri casuali del computer
const computer = Math.floor(Math.random() * (6 - 1) + 1);
console.log('Bot ' + computer)


let message

if(giocatore > computer){

    message = "Allora non sei così scarso"
    console.log('hai vinto')
} else if (giocatore < computer) {
    message = 'Sei una sciappa'
    console.log('hai perso')
} else {
    message = 'Riprova sarai più sfortunato'
    console.log('pareggio')
}

alert(message)




