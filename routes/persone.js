const express = require('express');
const router = express.Router();
const { persone } = require('../persone');


router.use(express.urlencoded({extended: false}));

router.get('/',  (req, res) => {
    res.status(200).json({ success: true, data: persone});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;// ES6 => Lo spacchettiamo, ossia utilizzando le graffe con id va già a prendere quel parametro e gli asegna quel valore.
    const persona = persone.find((p) => p.id === id);
    if(!persona){
         return res.status(404).send('non trovato')
     };
     res.json({ success: true, data: persone});
})

router.post('/',(req, res) => {
     console.log('req', req.body);
     const persona = req.body;
     persone.push(persona);
      res.status(200).json({success: true, data: persone});
 });

 router.put('/:id',(req, res) => {
    const { id } = req.params;// usiamo lo spacchettamento ES6 con le graffe!!!!
    console.log(req.params);
    const persona = req.body;
    console.log('persona:',persona);
    const index = persone.findIndex( p => p.id === id);
    persone.splice(index, 1, persona);// tolgo 1 elemento dall'index  e aggiungo il nuovo oggetto
    console.log('index:',index);

    
    res.status(200).json({success: true, data: persone});
});

router.delete('/:id',(req, res) => {
    const {id} = req.params;
    const index = persone.findIndex( p => p.id === id);// cerchiamo quella persona il cui id è uguale all'id che ci arriva
    persone.splice(index, 1);// mi devi toglier euqll'ellemento che parte dall'index e ne togli 1
    res.status(200).json( {success: true, data: persone })
 
 });
 

 module.exports = router;