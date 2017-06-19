var express = require('express');
var http = require('http');
var myParser = require('body-parser');
var request = require('request');
var Repo = require('../database/index.js')


var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(myParser.urlencoded({extended: true}));

app.post('/repos/import', function (req, res) {
  // TODO
  console.log('********IN THE SERVER!*******');

  var options = {
    url: 'https://api.github.com/users/' + req.body.term + '/repos',
    headers: {
      'User-Agent': 'request'
    },
    json: true
  
  }
  function callback(err, res) {
    if (err) {
      throw err;
    } else {     
      var arrRepos = res.body.reduce(function(arr, repo) {
        if (arr[0].length !== 25) {
          arr[0].push(repo.name);
          arr[1].push(repo.html_url);
        }
        return arr;
      }, [[], []]);
      var userRepo = new Repo ({
        id: res.body[0].owner.id,
        name: res.body[0].owner.login,
        repos: arrRepos
      });
      userRepo.save(function(err, userRepo) {
        if (err) { 
          console.log(err); 
        } else {
          console.log('SAVE TO DATABASE');
        }
      Repo.find(function(err, repos) {
        if (err) { console.log(err); } else {
          console.log(repos);
        }
      });
      console.log('SAVED INTO DB!');
      });
    }
  }
  request(options, callback);

});

app.get('/repos', function (req, res) {
  // TODO
  console.log('INSDE APP.GET REQ.BODY: ', req.body);
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

