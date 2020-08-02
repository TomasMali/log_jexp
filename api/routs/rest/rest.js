


const express = require('express')

const router = express.Router()


var fs = require('fs');
const { isPrimitive } = require('util');



// First route, get all users
router.get('/', (req, res, next) => {
    const id = req.body.data;
     fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
     
        res.status(200)
            .json(obj);
    }});
});

// First route, get all users
router.post('/', (req, res, next) => {
    const id = req.body.data;

     fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(   {

            Funzione_chiamato: req.body.Funzione_chiamato,
            Utente: req.body.Utente,
            Password: req.body.Password,
            Timestamp: req.body.Timestamp,
            ARC: req.body.ARC,
            Codice_Accisa: req.body.Codice_Accisa,
            Id_Locale: req.body.Id_Locale,
  
            Fornitura: req.body.Fornitura,
            Data: req.body.Data,
            Punto_Di_Vista: req.body.Punto_Di_Vista,
            Progressivo: req.body.Progressivo



          
        }); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', ()=>{
            res.status(200)
            .json({ message:  {
                    "Funzione_chiamato": req.body.Funzione_chiamato,
                    "Utente": req.body.Utente,
                    "Password": req.body.Password,
                    "Timestamp": req.body.Timestamp,
                    "ARC": req.body.ARC,
                    "Codice_Accisa": req.body.Codice_Accisa,
                    "Id_Locale": req.body.Id_Locale    
            }
        });
         });
    }});
});




// Get all menus not yet arrived of a user
router.get('/withid/:id', (req, res, next) => {
    const id = req.params.id;

        res.status(200).send(workItems.filter(x => {
           return x.id == id
        }))
    
})



module.exports = router;