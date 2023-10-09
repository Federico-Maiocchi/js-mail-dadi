// console.log('ciao')


// inserimento mail utente
let inserisciMail = prompt ('Ciao coso/a! Inserisci la tua mail!');
console.log("Mail inserità dall'utente " + inserisciMail)

let mailUser = inserisciMail.value
console.log(mailUser)

// lista di mail salvate nel database
const arrayMailUtenti = ['luca@gmail.com', 'giorgio@gmail.com', 'filo@gmail.com', 'ele@gmail.com', 'ale@gmail.com']

console.log(arrayMailUtenti);
const lunghezzaMail = arrayMailUtenti.length;

// ciclo di controllo delle mail
for (let i = 0; i < arrayMailUtenti.length; i++) {
    
    const mailCorrente = arrayMailUtenti[i]
    console.log(i, mailCorrente )

    
    
    // if ( mailCorrente === mailUser ) {
    //     console.log()
    // }
    
 }