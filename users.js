var express = require('express');
const { response } = require('../app');
var router = express.Router();


/* GET users listing. */
    router.get('/', function(req, res, next) {      //GET-metodi selaimessa 
        res.send('respond with a resource');
        console.log("toimii")
    });

    router.use(function (request, response, next){
        console.log("Olen valivehje 1!");
        next();
    });

    router.get('/toka',function(request,response){      //GET-metodi selaimessa 
        response.send("Hei toimin");
        console.log("toimii 0");
    });

    router.get('/kolmas/:nimi',function(request,response){      //POSTMANISSA
        response.send("Hei toimin vielakin1 "+request.params.nimi);
        console.log(request.params.nimi)
    })

    router.get('/neljas/:etunimi/:sukunimi',function(request, response){
        response.send("Olen nimeltani "+request.params.etunimi+" "+request.params.sukunimi);
        //console.log(request.params.etunimi.sukunimi)
    });

    router.post('/', function(request,response)
    {
        response.send(request.body);        // TÄTÄ EN SAANU TOIMIMAAN -- TOIMII
    
    });
      
module.exports = router;
