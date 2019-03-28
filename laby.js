var express = require("express");
var antennaFlowersAPIRouter = require('./laby/endpoints/antenna-flower-json-api.js');

const hostname = process.env.LABY_HOST;
const numeroPortMonAppli = process.env.LABY_PORT;
// cf. `baclklog` argument of listen method, setting maximum number of pending requests
//  I'll set that to 500 here
const nombreMaximalDeRequetesEnTraitement = process.env.LABY_BACKLOG;


console.log("vérification hostname : " + hostname);
console.log("vérification numeroPortMonAppli : " + numeroPortMonAppli);
console.log("vérification BACKLOG : " + nombreMaximalDeRequetesEnTraitement);

/**
 *
 *   LABY APP
 *
 ***/
var laby = express();

/**
 *
 *   laby APP STATIC ROUTES
 *
 ***/
// laby.use(express.static('laby/www'));
/**
 *
 *  Home page at / is generated at Laby's build time, from a pug template, and environement variables.
 *  Laby uses env variables :
 *      `export LABY_STATIC_ANTENNA="/antenna/static"` sets the path that express will route to the static endppoint
 *      `export LABY_RESTAPI_ANTENNA="/antenna/api/flowers"` sets the path that express will route to the REST API endppoint
 *      `export LABY_WEBSOCKET_ANTENNA="/antenna/websocket/flowers"`  sets the path that express will route to the websocket endppoint
 * to template the links to the antennas static content you loaded in laby/www
 *  Laby uses env variables like `export LABY_STATIC_ANTENNA_XXXX=` to template the static content you loaded in laby/www
 **/
laby.use("/", express.static(__dirname + "laby/home"));

//laby.use("/antenna/static", express.static(__dirname + "laby/www"));
laby.use(process.env.LABY_STATIC_ANTENNA, express.static(__dirname + "laby/www"));




/**
 *
 *   laby ANTENNA ROUTES
 *
 ***/

/**
 * a CRUD for something like an online flower shopping REST API
 **/
 // laby.use('/antenna/api/flowers', antennaFlowersAPIRouter);
 laby.use(process.env.LABY_RESTAPI_ANTENNA, antennaFlowersAPIRouter);


// laby.use("/antenna/websocket/flowers", express.static(__dirname + "laby/www"));
/**
 * a CRUD for something like the website of a flower shop vitirne site, aka no shop features, just where to find about and all that sh**t
 **/
// laby.use('/antenna/web/flowers', antennaFlowersWebRouter);


// https://nodejs.org/api/net.html#net_server_listen
// server.listen([port[, host[, backlog]]][, callback]) for TCP servers
// baclklog = maximum number of pending requests, I'll set that to 500 here
var server = laby.listen(numeroPortMonAppli, hostname, nombreMaximalDeRequetesEnTraitement, function(){
    var numport = server.address().port;
    var nomReseau = server.address().address;
    var nbMaxReq = 511; // 511 is the default server backlog limit // server.backlog();

    console.log(" Laby Server started at http://" + nomReseau + ":%s", numport + " [nbMaxReq] " + nbMaxReq);
});
