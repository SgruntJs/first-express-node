// const numero = 3;
// if(numero < 3 ) {
//     console.log('il numero è minore di 3');
// } else if(numero ==3 ) {
//     console.log('il numero è uguale a 3');
// } else {
//     console.log('il numero è maggiore di 3');
// }

// come lo lanciamo? node inde.js

// OGGETTI GLOBALI

// come in js alcune globali sono wondow, document. Su Node non ci sono prché non c'è la finestra del browser. Però abbiamo delle globali
// __dirname va a prendere la cartella corrente
// __filename  abbiamo il nome del file su cui stiamo lavorando
// require è una funzione che ci permette di utilizzare i moduli
// moule che ci da delle info sul modulo corrente
// process ci da info relative all'ambiente id esecuzione

// console.log('prova dirname', __dirname);
// console.log('prova 2', __filename);
// console.log('require', require);// un oggetto con dentro tante cose, lo useremo | const modulo = require("modulocheciinteressa")
// console.log('modulo', module)
// console.log('process', process)
// PROCESS:  ci servirà per metetre delle costanti che ci permetterà di capire se stiamo facendo partire 
// il nostro backend node in locale o in produzione. 
// E' fondamentale saperlo in qunato noi andremo a sistemare il nostro database (accesso al database in loc o prod)


//Moduli, come crearli

// const saluta = require('./utils');// il punto sta aindicare che è un file creato da noi!
// const nomi = require('./nomi');




// //Moduli BUILT-IN

// // OS

// const os = require('os') // con quelli built-in masta scriver il nome

// // console.log(os.arch());

// // Path

// // separator, join, basename, resolve

// // resolve mi da il percorso assoluto
// const path = require('path');
// percorsoFile = path.join('cartella', 'sottocartella', 'text.txt');

// const percorsoAss = path.resolve(__dirname, 'cartella', 'sottocartella', 'text.txt');
// console.log(percorsoAss);


//FS e sync e async

// andiamo a decostruire

// const {readFileSync, writeFileSync} = require('fs');

// const { errorMonitor } = require('events');

// const prova = readFileSync('./cartella/prova.txt', 'utf-8');
// const ciao = readFileSync('./cartella/ciao.txt', 'utf-8');

//writeFileSync('./cartella/prova.txt', 'bau bau merda');// scrivo o sovrasctivo nel file prova.txt
// se voglio appendere devo agigunger eun parametro
// writeFileSync('./cartella/prova.txt', ' appendimi', {flag: 'a'});

// se voglio scriver ein un file che non esiste
// writeFileSync('./cartella/bellazio.txt', 'Bella zio!');

// ASYNC
// const {readFile, writeFile} = require('fs');
// console.log('comincio');
// readFile('./cartella/prova.txt', 'utf8', (error, result) => {// adesso c'è una callback
//     if(error) {
//         console.log(error);
//         return;
//     }
//     const prova = result;
//     console.log(prova);
//     readFile('./cartella/prova.txt', 'utf8', (error, result) => {
//         if(error) {
//             console.log(error);
//         }
//         const ciao = result;

//         writeFile('./cartella/bella.txt', 'bella ciao zio', (error, result) => {
//             if(error) {
//                 console.log(error);
//                 return;
//             }
//             console.log('ho finito');
//         })
//     });

// });
// console.log('passo al prossimo compito');

// const _ = require('lodash');
// // array di più dimensioni: un array con dentro altri array
// const oggetti = [1, [2, [3, [4]]]];

// const oggetti2 = _.flatMapDeep(oggetti);

// console.log(oggetti2);

// il package lock ha come obbiettivo specifico quale versione abbiamo installato
// serve per andare a bloccare quelle che sono le versioni

// spiegazione delle versioni
// 3 numeri
// major changes, minor changes, patch: 1.0.0
// risolvo una fix ---> 1.0.1
// aggiungo una mappa nel mio gioco ---> 2.0.0
// alcune funzioni potrebbero essere deprecate


// NODEMON
// è un pacchetto che ci risolve il problema di dovere sempre lanciare
// le dependencies sono quelle dipendenze che sono necessarie per la nosta applicazioen, se non non installiamo node modules l'applicazione non va
// devDependencies sono le dipendenze che usiamo noi in sviluppo

//EVENT LOOP

// il ciclo di eventi che caratterizza node
// single thread e async
// non blocking code

// Event Queue

// CALL STACK: un posto dove viene tenuta traccia di tutte le callback (letteralmente una pila di chiamate)

// EVENT EMITTER

// Sappiamo che node funziona a eventi


// const EventEmitter = require('events');
// const customEmitter = new EventEmitter();
// // ci stiamo iscrivendo a questo evento - con on
// customEmitter.on('messaggio', (nome, anno) => {
//     console.log(`ciao sono ${nome} e sono partito nell'anno ${anno}`);
// });
// // l'emit deve essere dopo l'iscrizione all'evento
// customEmitter.emit('messaggio', 'annalisa', 2022);


//  for ( let i = 0; i< 10000; i++) {
//      writeFileSync('./filegrande.txt', `Ciao riga numero ${i}\n`, { flag: 'a'});// flag 'a' sta per append!!!!
//  }
// const { createReadStream } = require('fs');
// const filegrande = readFileSync('./filegrande.txt');
// // console.log(filegrande);

// const stream = createReadStream('./filegrande.txt');
// stream.on('data', (result) => {
//     console.log(result);
// });//il file viene diviso in chunks

// quindi gli stream utulizzano gli eventi che ci passa il file in chunks separati

//EXPRESS

// MAPPING PER NON MANDARE TUTTI I DATI
// ovvero siamo sulla lista di tutte le persone, nome, immagine e tasto segui

// COME RICHIEDERE I DATI DI UN OGEGTTO SPECIFIFO

const express = require('express');
const app = express();// metodo che crea un'istanza di express

const { persone } = require('./persone');
// const middlewareProva = require('./middlewareProva');
// const auth = require('./auth');


// app.get('/', (req, res) => {
//     res.send("<h1>Home Page</h1><a href='/persone'>Vai a persone</a>")
// });

app.get('/persone', (req, res) => {
    const nuovePersone = persone.map((persona) => {
        const { nome, cognome, eta } = persona;
        return { nome, cognome, eta }
    })
    res.json(nuovePersone);
});

// app.get('/persone/1', (req, res) => {
//     const persona = persone.find( (persona) => persona.id === '1');
//     res.json(persona);
// })

// bisogna Astrarre

// Entrano in scena i ROUTE PARAM
// app.get('/persone/:id', (req, res) => {
//     console.log(req.params);
//     const { id } = req.params;// ES6 => Lo spacchettiamo, ossia utilizzanod le graffe con id va già a prendere quel parametro e gli asegna quel valore.
//     const persona = persone.find((p) => p.id === id);
//     if(!persona){
//         return res.status(404).send('non trovato')
//     };
//     res.json(persona);
// })

//  QUERY STRING PARAM

// https://www.google.com/search?q=fluminense&oq=fluminense&aqs=chrome.0.0i67i355i433j46i67i433i512j0i512l3j69i60l3.1648j1j7&sourceid=chrome&ie=UTF-8

// https://www.google.com/search tutto questo è l'endpoint

// ? da qui in poi tutto il resto sono dei parametri

// q è una query,  fluminense è il parametro 

// app.get('/persone/search', (req, res)=> {
//     //utiliziamo req.query
//     console.log(req.query);
//     // gestiamo ?query=a
//     const { query, limit } = req.query;
//     let personeFiltrate = [...persone];// prendiamo il resto di persone, faccimao letteralmente una copia di persone

//     if(query) {// se query esiste, ossia se c'è un valore di ricerca
//         personeFiltrate = personeFiltrate.filter( (persona) => {
//             return persona.nome.toLowerCase().startsWith(query.toLowerCase());// è caseSensitive, capire come gestire ilc ase sensitive
//         })
//     }
//     if(limit) {
//         personeFiltrate = personeFiltrate.slice(0, Number(limit))
//     }
//     if(personeFiltrate.length < 1) {
//         return res.status(200).json({success: true, data: []})
//     }
//     res.status(200).json(personeFiltrate);
// })

//app.use(middlewareProva);// lo uso per mettere ovuneque middlewareProva
// app.use('/persone', middlewareProva);// posso usare il middleware solo sulle pagine che contengono persone

// posso anche usare multiple funzioni di middleware, semplicemente mettendo un array nell'app.use([])
// app.use([middlewareProva, auth]);

// dobbiamo usare un middleware di express

app.use(express.json());// tutto ciò che entra controlliamo se va utilizzato come json, ci permette di legegre json in entrata
app.use(express.static('public'));

// per un form usare il middlewer di express
// app.use(express.urlencoded({extended: false}));

app.get('/api/persone',  (req, res) => {
    res.status(200).json({ success: true, data: persone});
});

app.get('/form', (req, res) => {
    res.sendFile('form.html', {root: __dirname + "/public"});
})

app.get('/api/persone/:id', (req, res) => {
    const { id } = req.params;// ES6 => Lo spacchettiamo, ossia utilizzando le graffe con id va già a prendere quel parametro e gli asegna quel valore.
    const persona = persone.find((p) => p.id === id);
    if(!persona){
         return res.status(404).send('non trovato')
     };
     res.json({ success: true, data: persone});
})

 app.post('/api/persone',(req, res) => {
     console.log('req', req.body);
     const persona = req.body;
     persone.push(persona);
      res.status(200).json({success: true, data: persone});
 });

app.get('/user',(req, res) => {
    res.json({ nome: 'Mario', cognome: 'Rossi' });
});

app.put('/api/persone/:id',(req, res) => {
    const { id } = req.params;// usiamo lo spacchettamento ES6 con le graffe!!!!
    console.log(req.params);
    const persona = req.body;
    console.log('persona:',persona);
    const index = persone.findIndex( p => p.id === id);
    persone.splice(index, 1, persona);// tolgo 1 elemento dall'index  e aggiungo il nuovo oggetto
    console.log('index:',index);

    
    res.status(200).json({success: true, data: persone});
});

app.delete('/api/persone/:id',(req, res) => {
   const {id} = req.params;
   const index = persone.findIndex( p => p.id === id);// cerchiamo quella persona il cui id è uguale all'id che ci arriva
   persone.splice(index, 1);// mi devi toglier euqll'ellemento che parte dall'index e ne togli 1
   res.status(200).json( {success: true, data: persone })

});

app.listen(3000)