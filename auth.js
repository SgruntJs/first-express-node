const auth = (req, res, next) => {
    console.log('accesso effettuato')
    next()
}

module.exports = auth;