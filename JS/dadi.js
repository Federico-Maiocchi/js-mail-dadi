// console.log('ciao')

// Bottone per iniziare a giocare
const buttonDocElement = document.getElementById('button');

// Funzionalità del bottone tramite click
buttonDocElement.addEventListener ('click', function () {
    // Numeri casuali del giocatore
    const giocatore = Math.floor(Math.random() * (6 - 1) + 1);
    console.log('Player ' + giocatore);

    // Numeri casuali del computer
    const computer = Math.floor(Math.random() * (6 - 1) + 1);
    console.log('Bot ' + computer);

    let result ;

    let message = '';
    
    if(giocatore > computer){
        result = 'hai vinto';
        message = '"Allora non sei così scarso"';
        console.log('hai vinto');
    } else if (giocatore < computer) {
        result = 'hai perso';
        message = '"Sei una schiappa"';
        console.log('hai perso');
    } else {
        result = 'pareggio';
        message = '"Riprova sarai più sfortunato"';
        console.log('pareggio');
    }

    // collegamento numeri player al dom
    let player = giocatore;

    const playerDomElement = document.getElementById('player');
    playerDomElement.innerHTML = player;

    // collegamento numeri computer al dom
    let bot = computer; 

    const botDomElement = document.getElementById('bot');
    botDomElement.innerHTML = bot; 

    // collegamento risultato  al dom
    let point = result; 

    const pointDomElement = document.getElementById('point');
    pointDomElement.innerHTML = point;

    //collegamento messaggio motivazionale
    let attention = message

    const attentionDomElement = document.getElementById('attention');
    attentionDomElement.innerHTML = attention;
    
})






