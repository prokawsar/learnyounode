/*
statement: https://hastebin.com/ohusaveduk.coffeescript
*/
var http = require("http");

var url = process.argv[2];
var res = "";

http.get(url, function(response) {
    response.on('data', function(chunk) {
        res += chunk.toString();
        //console.log(chunk.toString());
    });
    response.on('error', function(error) {
        console.log(error);
    });
    response.on('end', function(data) {
        console.log(res.length);
        console.log(res);
    })
});


/* Official Solution */
var http = require('http')
var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
