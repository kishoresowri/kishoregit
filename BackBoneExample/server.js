    
   /* var express = require( 'express' ); //Web framework
   var bodyParser = require('body-parser'); //Parser for reading request body
   var path = require( 'path' ); //Utilities for dealing with file paths
    // mongoose = require( 'mongoose' ); //MongoDB integration

//Create server
  var app = express();

//Where to serve static content
app.use( express.static( path.join( application_root,'../', 'site') ) );
app.use(bodyParser());

//Start server
var port = 8080;

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
}); */

const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});