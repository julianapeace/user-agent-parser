const express = require('express')
const app = express()
const importEnv = require('import-env')
const port = process.env.PORT || 8000;
const body_parser = require('body-parser');

var UAParser = require('ua-parser-js');
var parser = new UAParser();
// var ua = request.headers['user-agent'];     // user-agent header from an HTTP request
// console.log(parser.setUA(ua).getResult());
console.log(parser.getBrowser())
console.log(parser.getDevice())
console.log(parser.getCPU())


app.use(body_parser.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index.hbs');
});

app.post('/submit', function(req, res){
  //gather info about the browser
  res.render('you.hbs',{})
});

app.listen(port, function(){
  console.log('listening on port ' + port)
});
