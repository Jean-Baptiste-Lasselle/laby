/**
* The customizeme Dashboard Endpoint for the Laby server
**/
// Even though an express reference was created by omega.js entrypoint
var express = require('express');
var customizemeRouter = express.Router();

// Storage route.   http://$HOSTNAME/antenna/customizeme
customizemeRouter.get('/customizeme', function(request, response, next) {
  /**
   * For a "simple auth" endpoint, leveraging username/password auth
   * we could :
   * var username = request.params.username;
   * var password = request.params.password;
   **/

 console.log(" >>>>>>>>>>>>>>>>>>>>>  this is the customizeme endpoint : I am under development, not available for end users yet ");
 module.exports.flowers.someFunctionYouCanCall(4, function (error, bouquet) {
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
 * This function is a totally unseful french function, just for the purpose of providing example structures
 *
 * @howManyFlowersYouWant a numbre  the number of flowers you want
 * @whateverYouWantToDoWithItAfter a function, the "callback" function, meaning you just tell me what you want me to do when i'm finished working for you.
 * The "callback" function shall always take 2 arguments :
 *     +  the first, being an error object, which has to be set to null, to notifiy the callback that everything went ok with the processing of <code>someFunctionYouCanCall</code>
 *     +  the second, being an object containing the stuff that the <code>someFunctionYouCanCall</code> retrieved for you : it is passed to the callback function so you can decide whateveryou want to do with it, when it's there, asynchronously. This argument should be set to <code>null</code> when no data is retrieved : if the error is null too, that means its ok that there's no data back, and there cases where you just dont get anything in return
 *
 **/
module.exports.flowers.someFunctionYouCanCall = function (howManyFlowersYouWant, whateverYouWantToDoWithItAfter) {
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

module.exports.flowers.pickAFlower = function (error, bouquet) {
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
