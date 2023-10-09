// console.log('ciao')





const buttonDocElement = document.getElementById('button');


buttonDocElement.addEventListener ('click', function () {
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

        // const playerDomElement 
    }

    let player = giocatore

    const playerDomElement = document.getElementById('player');
    playerDomElement.innerHTML = player

    let bot = computer 

    const botDomElement = document.getElementById('bot')
    botDomElement.innerHTML = bot 

    

    // alert(message)
})






