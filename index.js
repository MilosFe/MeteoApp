/**** Index.Js
 @ Node Node server
 *****/

/* Loading required dependencies:
 ** @express framework for node 
 ** @body-parser for json decode of headers
 ** @logger for console logging for showing params
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var http = require('http');



/* app uses port 5000 or environments port, in our case 
   our production server will be on Heroku, but local server is on 5000
 */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(logger('dev'));
app.set('app', __dirname + '/app');

app.get('/', function(request, response) {
    response.render('index');
});
app.get('/meteo', function(request, response) {
    http.get('http://api.met.no/weatherapi/locationforecast/1.9/?lat=11.43;lon=12.12', function(res) {
        var str = '';
        console.log('Response is ' + res.statusCode);

        res.on('data', function(chunk) {
            //console.log('BODY: ' + chunk);
            str += chunk;
        });

        res.on('end', function() {
            response.send(str);
        });

    });

});



app.listen(app.get('port'), function() {
    console.log('Node app is running on', app.get('port'));
});