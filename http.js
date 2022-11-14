//modulo HTTP

// serve per creare un web server, cioè dei server sempre online

const http = require('http');
const { pathToFileURL } = require('url');
//request e response per convenzione
const server = http.createServer( (req, res) => {
    // res.write('Benvenuto sul nostro sito');
    // res.end();
    if(req.url === '/') {
        res.end('Benvenuto sul nostro sito');
    }
    if(req.url === '/luigi' ) {
        res.end('il profilo di Luigi');
    }
    res.end(`<h1>Errore</h1>
   <p>Torna alla <a href="/">home</a></p> `)
})

server.listen(3000);// dobbiamo metterci ina scolto


//locale, installazione solo sulla cartella del vostro progetto. Per  esempio npm i rxjs verrà installato nella cartella
// Se creo un nuovo progetto dovrò reinstallare il pacchetto
// se invece voglio installarlo globalmente sul nostro computer faccio npm i -g. Quindi ogni volta  vado ad aprire un progetto dice 
// ah ok hai già installato globalmente il pacchetto e automaticamante te lo includo

//metodi HTTP

//GET
//POST
//PUT
// DELETE
