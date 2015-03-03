var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var http    = require('http');
var app     = express();

function findWeekOfGames() {
  request( 'http://api.football-data.org/alpha/fixtures?n1', function (error, response, json) {
    if(!error && response.statusCode == 200) { console.log(json) }
  });
}


app.use( 'port', (process.env.PORT || 5050 ));
app.use( express.static(__dirname + '/public') );
app.get( '/', function() {response.send( findWeekOfGames() ) });
