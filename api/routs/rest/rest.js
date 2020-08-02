


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
        obj.table.push(   {
            timestamp: id.timestamp,
            utente: id.utente,
            password: id.password,
            methodName: id.methodName,
            parametri1:id.parametri1,
            parametri2:id.parametri2
        }); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', ()=>{
            res.status(200)
            .json({ message:  id });
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