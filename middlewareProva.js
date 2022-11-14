
// middleware: funzioni che vengono eseguite durante la richiesta e fino alla risposta
// il middleware è una funzione che sta in mezzo

const middlewareProva = (req, res, next) => {
    const { method, url } = req;
    const time = new Date().getSeconds();
    console.log( method, url, time );
    next();
}

// il middleware si inserisce  nelle funzioni  di get prima della callback

// il middleware per procedere e passare alla response deve avere la funzione next()

// potrebbe anche non avere next() ,a un res.send() e rimanere  bloccato nel mezzo.

// per utilizzare e rendere scalabile e quindi utilizzabile dapeprutto i middleware devo usare app.use

module.exports = middlewareProva;