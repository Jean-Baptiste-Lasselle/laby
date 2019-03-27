/**
* The antenna Endpoint for the Laby server :
* A simple, ty pical CRUD REST API endpoint, json data of course
* API flowered with the kind help of
* https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
*
* This API doesn't need the help of a databse, it's just mocking it with a simple JSON object loaded on laby's startup
**/
// Even though an express reference was created by omega.js entrypoint
const express = require('express');
const antennaRouter = express.Router();

/**
 *                            The Flowers API
 *                                   -
 *  The Antenna Router is set on '/antenna/api/flowers', by laby startup script ./laby.js, so
 *  this enpoint will catch all HTTP GET REQUESTS sent to
 *  http://process.env.LABY_HOST/antenna/api/flowers
 *  and respond to them with an HTTP RESPONSE expected for the Flowers API
 *  expected  by API's user :
 *  => RETRIEVE PART OF CRUD
 **/
var antennaRouter.get('/', function(request, response, next) {

 console.log(" >>>>>>>>>>>>>>>>>>>>>  this is the Flowers API ,  Antenna Ltd. [RETRIEVE PART OF CRUD] endpoint : I am under development, not available for end users yet ");
 someFunctionYouCanCall(4, function (error, bouquet) {
   if (error) return next(error);
   response.setHeader('Content-Type', 'application/json');
   // var bouquet = {};
   var nbFleuri = Object.keys(bouquet).length;
   var sup = (nbFleuri < 1 ? 1:nbFleuri) ;
   var inf = 1;

   var voila = Math.floor(Math.random() * (sup - inf) + inf);
   console.log(" This ins a randomly picked flower in you bouquet : "  + bouquet.voila.toString());
   return response.send(bouquet.voila);
 });
});

/**
 *                            The Flowers API
 *                                   -
 *  The Antenna Router is set on '/antenna/api/flowers', by laby startup script ./laby.js, so
 *  this enpoint will catch all HTTP POST REQUESTS sent to
 *  http://process.env.LABY_HOST/antenna/api/flowers
 *  and respond to them with an HTTP RESPONSE expected for the Flowers API
 *  expected  by API's user :
 *  => CREATE PART OF CRUD
 **/
var antennaRouter.post('/', function(request, response, next) {

 console.log(" >>>>>>>>>>>>>>>>>>>>>  this is the Flowers API ,  Antenna Ltd. [CREATE PART OF CRUD] endpoint : I am under development, not available for end users yet ");
 someFunctionYouCanCall(4, function (error, bouquet) {
   if (error) return next(error);
   response.setHeader('Content-Type', 'application/json');
   // var bouquet = {};
   var nbFleuri = Object.keys(bouquet).length;
   var sup = (nbFleuri < 1 ? 1:nbFleuri) ;
   var inf = 1;

   var voila = Math.floor(Math.random() * (sup - inf) + inf);
   console.log(" This ins a randomly picked flower in you bouquet : "  + bouquet.voila.toString());
   return response.send(bouquet.voila);
 });
});


/**
 *                            The Flowers API
 *                                   -
 *  The Antenna Router is set on '/antenna/api/flowers', by laby startup script ./laby.js, so
 *  this enpoint will catch all HTTP DELETE REQUESTS sent to
 *  http://process.env.LABY_HOST/antenna/api/flowers
 *  and respond to them with an HTTP RESPONSE expected for the Flowers API
 *  expected  by API's user :
 *  => DELETE PART OF CRUD
 **/
var antennaRouter.delete('/', function(request, response, next) {
 
 console.log(" >>>>>>>>>>>>>>>>>>>>>  this is the Flowers API ,  Antenna Ltd. [DELETE PART OF CRUD] endpoint : I am under development, not available for end users yet ");
 someFunctionYouCanCall(4, function (error, bouquet) {
   if (error) return next(error);
   response.setHeader('Content-Type', 'application/json');
   // var bouquet = {};
   var nbFleuri = Object.keys(bouquet).length;
   var sup = (nbFleuri < 1 ? 1:nbFleuri) ;
   var inf = 1;

   var voila = Math.floor(Math.random() * (sup - inf) + inf);
   console.log(" This ins a randomly picked flower in you bouquet : "  + bouquet.voila.toString());
   return response.send(bouquet.voila);
 });
});

/**
 *                            The Flowers API
 *                                   -
 *  The Antenna Router is set on '/antenna/api/flowers', by laby startup script ./laby.js, so
 *  this enpoint will catch all HTTP PUT REQUESTS sent to
 *  http://process.env.LABY_HOST/antenna/api/flowers
 *  and respond to them with an HTTP RESPONSE expected for the Flowers API
 *  expected  by API's user :
 *  => UPDATE PART OF CRUD
 **/
var antennaRouter.put('/', function(request, response, next) {
 
 console.log(" >>>>>>>>>>>>>>>>>>>>>  this is the Flowers API ,  Antenna Ltd. [UPDATE PART OF CRUD] endpoint : I am under development, not available for end users yet ");
 someFunctionYouCanCall(4, function (error, bouquet) {
   if (error) return next(error);
   response.setHeader('Content-Type', 'application/json');
   // var bouquet = {};
   var nbFleuri = Object.keys(bouquet).length;
   var sup = (nbFleuri < 1 ? 1:nbFleuri) ;
   var inf = 1;

   var voila = Math.floor(Math.random() * (sup - inf) + inf);
   console.log(" This ins a randomly picked flower in you bouquet : "  + bouquet.voila.toString());
   return response.send(bouquet.voila);
 });
});






/**
 *
 * ------------------------>>>  Utils Functions, shall go to ./flower-utils.js?
 *
 **/



/**
 *
 * This function is a totally unseful french function, just for the purpose of providing example structures
 *
 * @howManyFlowersYouWant a numbre  the number of flowers you want
 * @whateverYouWantToDoWithItAfter a function, the "callback" function, meaning you just tell me what you want me to do when i'm finished working for you.
 * The "callback" function shall always take 2 arguments :
 *     +  the first, being an error object, which has to be set to null, to notifiy the callback that everything went ok with the processing of <code>someFunctionYouCanCall</code>
 *     +  the second, being an object containing the stuff that the <code>someFunctionYouCanCall</code> retrieved for you : it is passed to the callback function so you can decide whateveryou want to do with it, when it's there, asynchronously. This argument should be set to <code>null</code> when no data is retrieved : if the error is null too, that means its ok that there's no data back, and there cases where you just dont get anything in return
 *
 **/
function someFunctionYouCanCall (howManyFlowersYouWant, whateverYouWantToDoWithItAfter) {
  var bouquet = {};
  for(var i = 0; i < howManyFlowersYouWant;i++){
        (function(j){
            console.log("Flower no. " + j);
            bouquet.i = { i: "Flower no. " + j}
        })(i);
  }
  if (!howManyFlowersYouWant) {
     whateverYouWantToDoWithItAfter(null, bouquet);
  } else {
    console.log("There has been a problem in our flower delivery chain, let us check that, we'll be back up;");
  }

}

/**
 * This last one is so synchronous (no callbacks)
 * Notice, that unless it gets a callback argument, or it can never ever be
 * used inside another context in which, you can get your hands on something
 * like <code>response.setHeader ....</code>
 *
 **/

function pickAFlower (error, bouquet) {
  if (error) return next(error);
  // response.setHeader('Content-Type', 'application/json');
  // var bouquet = {};
  var nbFleuri = Object.keys(bouquet).length;
  var sup = (nbFleuri < 1 ? 1:nbFleuri) ;
  var inf = 1;

  var voila = Math.floor(Math.random() * (sup - inf) + inf);
  console.log(" This ins a randomly picked flower in you bouquet : "  + bouquet.voila.toString());
  // return response.send(bouquet.voila);
  return bouquet.voila;
}
