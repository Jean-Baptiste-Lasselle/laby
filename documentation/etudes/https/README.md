# Laby et TLS

## Une première source intéressante 

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

J'nen retire une impléentatio possible pour le HTTPS, avec de la configuration à mettre en oeuvre : 

* Fichier `laby.js`, pour avoir les deux interfaces HTTP et HTTPS, etil faut que je rajoute les vairbles d'environnement pour pouvoir configurer : 
  * `LABY_HTTP_INTERFCACE_HOST` : accédé dans le code avec `process.env.LABY_HTTP_INTERFCACE_HOST`, le code affectant une valeur par défaut si la vairable d'environnement n'est pas définie à l'exécution.
  * `LABY_HTTP_INTERFCACE_PORT` : accédé dans le code avec `process.env.LABY_HTTP_INTERFCACE_PORT`, le code affectant une valeur par défaut si la vairable d'environnement n'est pas définie à l'exécution.
  * `LABY_HTTPS_INTERFCACE_HOST` : accédé dans le code avec `process.env.LABY_HTTPS_INTERFCACE_HOST`, le code affectant une valeur par défaut si la vairable d'environnement n'est pas définie à l'exécution.
  * `LABY_HTTPS_INTERFCACE_PORT` : accédé dans le code avec `process.env.LABY_HTTPS_INTERFCACE_PORT`, le code affectant une valeur par défaut si la vairable d'environnement n'est pas définie à l'exécution.
  
  

```JavaScript
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
```

* Fichier `laby-tls-interface.js`, correction très importante pour l'autorité de certification (et les dépndances me plaisent mieux) : 

```JavaScript
    var express = require('express');
    var https = require('https');
    var fs = require('fs');

    var options = {
      ca: [fs.readFileSync(PATH_TO_BUNDLE_CERT_1), fs.readFileSync(PATH_TO_BUNDLE_CERT_2)],
      cert: fs.readFileSync(PATH_TO_CERT),
      key: fs.readFileSync(PATH_TO_KEY)
    };

    app = express()

    app.get('/', function(req,res) {
        res.send('hello');
    });

    var server = https.createServer(options, app);

    server.listen(8001, function(){
        console.log("server running at https://IP_ADDRESS:8001/")
    });
```

* Fichier `ccc` : 

```JavaScript
ccc
```

