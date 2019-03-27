var express = require("express");
var antennaFlowersAPIRouter = require('./laby/endpoints/antenna-flower-json-api.js');

const hostname = process.env.LABY_HOST;
const numeroPortMonAppli = process.env.LABY_PORT;
// cf. `baclklog` argument of listen method, setting maximum number of pending requests
//  I'll set that to 500 here
const nombreMaximalDeRequetesEnTraitement = process.env.LABY_BACKLOG;
// const nombreMaximalDeRequetesEnTraitement = process.env.BACKLOG;

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
laby.use(express.static('laby/www'));

/**
 *
 *   laby ANTENNA ROUTES
 *
 ***/

/**
 * a CRUD for something like an online flower shopping REST API
 **/
antenna.use('/antenna/api/flowers', antennaFlowersAPIRouter);
/**
 * a CRUD for something like the website of a flower shop vitirne site, aka no shop features, just where to find about and all that sh**t
 **/
antenna.use('/antenna/web/flowers', antennaFlowersAPIRouter);


// https://nodejs.org/api/net.html#net_server_listen
// server.listen([port[, host[, backlog]]][, callback]) for TCP servers
// baclklog = maximum number of pending requests, I'll set that to 500 here
var server = laby.listen(numeroPortMonAppli, hostname, nombreMaximalDeRequetesEnTraitement, function(){
    var numport = server.address().port;
    var nomReseau = server.address().address;
    var nbMaxReq = 511; // 511 is the default server backlog limit // server.backlog();

    console.log(" Laby Server started at http://" + nomReseau + ":%s", numport + " [nbMaxReq] " + nbMaxReq);
});
