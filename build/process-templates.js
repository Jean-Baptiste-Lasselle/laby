// var fs = require("fs");
var fs = require("fs-extra");
var pug = require('pug');

// Compile the source code
const compiledLabyHomePage = pug.compileFile('./laby/home.template/index.html.pug');


 /*

 TEMPLATING ENVIRONEMENT

 laby_version: process.env.LABY_RELEASE_VERSION,
 laby_dev_team_github_social: process.env.LABY_SOCIAL_DEV_TEAM,           //  'https://github.com/Jean-Baptiste-Lasselle',
 laby_s_would_you_like_to_know_more: process.env.LABY_WOULD_YOU_LIKE_TO_KNOW_MORE,                            // 'https://github.com/Jean-Baptiste-Lasselle/laby#readme',
 laby_static_antenna_link: "." + process.env.LABY_STATIC_ANTENNA,
 laby_restapi_antenna_link: "." + process.env.LABY_RESTAPI_ANTENNA ,
 laby_static_antenna_link: "." + process.env.LABY_WEBSOCKET_ANTENNA

 */


 /**
  *
  *  Home page at / is generated at Laby's build time, from a pug template, and environement variables.
  *  Laby uses env variables :
  *      `export LABY_STATIC_ANTENNA="/antenna/static"` sets the path that express will route to the static endppoint
  *      `export LABY_RESTAPI_ANTENNA="/antenna/api/flowers"` sets the path that express will route to the REST API endppoint
  *      `export LABY_WEBSOCKET_ANTENNA="/antenna/api/flowers"`  sets the path that express will route to the websocket endppoint
  * to template the links to the antennas static content you loaded in laby/www
  *  Laby uses env variables like `export LABY_STATIC_ANTENNA_XXXX=` to template the static content you loaded in laby/www
  **/

// Rendering Laby's home page
var generatedLabyHomePage = compiledLabyHomePage({
  laby_version: process.env.LABY_RELEASE_VERSION || "0.0.0",
  laby_dev_team_github_social: process.env.LABY_SOCIAL_DEV_TEAM || 'https://github.com/Jean-Baptiste-Lasselle',
  laby_s_would_you_like_to_know_more: process.env.LABY_WOULD_YOU_LIKE_TO_KNOW_MORE || 'https://github.com/Jean-Baptiste-Lasselle/laby#readme',
  laby_static_antenna_link: "." + process.env.LABY_STATIC_ANTENNA || '/antenna/static',
  laby_restapi_antenna_link: "." + process.env.LABY_RESTAPI_ANTENNA || '/antenna/api/flowers' /*,
  laby_static_antenna_link: "." + process.env.LABY_WEBSOCKET_ANTENNA || '/antenna/websocket/flowers' */
});
// "<p>Timothy's Pug source code!</p>" Or... well... laby's home page



const LABY_STATIC_ANTENNA_HOME_FOLDER= __dirname + "/../" + "laby/home";

// Now done with fs-extra instead of standard fs
fs.writeFile(LABY_STATIC_ANTENNA_HOME_FOLDER + "/index.html", generatedLabyHomePage.toString(), function(err, data) {
  if (err) console.log(err);
  console.log("Successfully generated Laby's Home Page to [].");
});


// Now recursively copying laby/home.template/ to laby/home
fs.copy(LABY_STATIC_ANTENNA_HOME_FOLDER + '.template', LABY_STATIC_ANTENNA_HOME_FOLDER, function (err) {
  if (err) {
    console.error("An error occured while trying to copy [" + LABY_STATIC_ANTENNA_HOME_FOLDER + '.template' + "] folder to [" + LABY_STATIC_ANTENNA_HOME_FOLDER + "] foler.");
    console.error(err);
  } else {
    console.log("Successfully copied [" + LABY_STATIC_ANTENNA_HOME_FOLDER + '.template' + "] folder to [" + LABY_STATIC_ANTENNA_HOME_FOLDER + "] foler.");
  }
}); // copies directory, even if it has subdirectories or files

// For Promises / Observable Streams form, see https://github.com/jprichardson/node-fs-extra#sync-vs-async-vs-asyncawait
/*
const fs = require('fs-extra')

// Async with promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))

// Async with callbacks:
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})

// Sync:
try {
  fs.copySync('/tmp/myfile', '/tmp/mynewfile')
  console.log('success!')
} catch (err) {
  console.error(err)
}

// Async/Await:
async function copyFiles () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

copyFiles()
*/
