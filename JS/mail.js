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
let mailTrovata = false


// let message = 'mi disp ma la tua mail non corrisponde, verrai bloccato, flagellato e messo al rogo'
// ciclo di controllo delle mail
for (let i = 0; i < lunghezzaMail; i++) {
    
    const mailCorrente = arrayMailUtenti[i];
    console.log(i, mailCorrente )
    // console.log(inserisciMail === mailCorrente)

    if ( inserisciMail === mailCorrente) {
        mailTrovata = true
        // message = 'Che fortuna! (per non dire altro) la tua mail corrisponde'
        alert('Che fortuna! (per non dire altro) la tua mail corrisponde')
        // console.log('accepted')
    }

    console.log(mailTrovata)
    if (mailTrovata) {
        console.log ('accesso consentito')
    } else {
        console.log('accesso negato')
    }
 }

//  console.log(message);
alert('mi disp ma la tua mail non corrisponde, verrai bloccato, flagellato e messo al rogo');