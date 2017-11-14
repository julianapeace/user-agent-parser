const express = require('express')
const app = express()
const importEnv = require('import-env')
const port = process.env.PORT || 8000;
const body_parser = require('body-parser');
const util = require('util');
var address = require('address');
var geolocator = require('geolocator')
var http = require('http');
var parser = require('ua-parser-js');

app.use(body_parser.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index.hbs');

// default interface 'eth' on linux, 'en' on osx.
});

app.post('/submit', function(req, res){
  var ua = parser(req.headers['user-agent']);

  headers = ['Accept','Accept-Charset','Accept-Encoding','Accept-Language','Accept-Datetime','Authorization','Cache-Control','Connection','Cookie','Content-Length','Content-Type','Date','Expect','Expect','Origin','Pragma','Proxy-Authorization','Range','TE','Upgrade','Via','Warning','From', 'Host','Referer']
  full = {}
  for (i = 0; i < headers.length; i++) {
    var ub = parser(req.get(headers[i]));
    if (ub['ua'] !== ''){
      full[headers[i]]=ub['ua']
    }
  }
  // console.log(util.inspect(ub, {showHidden: false, depth: null}))

  var ip = address.ip();
  address(function (err, addrs) {
    console.log(addrs.ip, addrs.ipv6, addrs.mac);
  });

  var result = JSON.stringify(ua, null, 2);
  res.render('you.hbs',{'result':ua, 'full':full})
});

app.get('/hello', function (req, res){
  geolocator.config({
        language: "en",
        google: {
            version: "3",
            key: "YOUR-GOOGLE-API-KEY"
        }
    });

    window.onload = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumWait: 10000,     // max wait time for desired accuracy
            maximumAge: 0,          // disable cache
            desiredAccuracy: 30,    // meters
            fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
            addressLookup: true,    // requires Google API key if true
            timezone: true,         // requires Google API key if true
            map: "map-canvas",      // interactive map element id (or options object)
            staticMap: true         // map image URL (boolean or options object)
        };
        geolocator.locate(options, function (err, location) {
            if (err) return console.log(err);
            console.log(location);
        });
    };
})

app.listen(port, function(){
  console.log('listening on port ' + port)
});
