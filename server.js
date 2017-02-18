var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

app.get('/', function(req, res, next) {
  request({
    uri: 'http://api.football-data.org/v1/competitions/426/leagueTable',
    qs: {
      api_key: '925acc6f22f84a1aa1bd2132d160408d'
    }},
    function(error, response, body) {
      console.log('khgf');
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.send(body);
      } else {
        res.json(error);
      }
    });
});
