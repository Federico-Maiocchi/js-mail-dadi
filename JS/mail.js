// console.log('ciao')


// inserimento mail utente
let inserisciMail = prompt ('Ciao coso/a! Inserisci la tua mail!');
console.log("Mail inserità dall'utente " + inserisciMail);

// lista di mail salvate nel database
const arrayMailUtenti = [
    'luca@gmail.com',
    'giorgio@gmail.com',
    'filo@gmail.com',
    'ele@gmail.com', 
    'ale@gmail.com'
];

// console.log(arrayMailUtenti);
const lunghezzaMail = arrayMailUtenti.length;

// messaggio di mail non corretta
let mailNotacpt;
let message = 'Mi disp ma la non è stata accettata';

// ciclo di controllo delle mail
for (let i = 0; i < arrayMailUtenti.length; i++) {
    
    const mailCorrente = arrayMailUtenti[i];
    // console.log(i, mailCorrente )

    if ( inserisciMail === mailCorrente) {
        message = 'Che fortuna! (per non dire altro) la tua mail corrisponde'
        // alert('La tua mai è stata accettata')
        // console.log('accepted')
    }
 }

 console.log(message);
 alert(message);