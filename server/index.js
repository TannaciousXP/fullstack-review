var express = require('express');
var http = require('http');
var myParser = require('body-parser');
var request = require('request');


var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(myParser.urlencoded({extended: true}));

app.post('/repos/import', function (req, res) {
  // TODO
  console.log('IN THE SERVER!');
  console.log('IN APP.POST REQ.BODY: ', req.body.term);
  var options = {
    url: 'https://api.github.com/users/' + req.body.term + '/repos',
    headers: {
      'User-Agent': 'request'
    }
  
  }
  function callback(err, res) {
    if (err) {
      throw err;
    } else {  // var data = JSON.parse(body);
      console.log(JSON.parse(res.body)); // Print the google web page.
    }
  }
  request(options, callback);

});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

