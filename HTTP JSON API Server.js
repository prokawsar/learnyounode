/*
statement: https://hastebin.com/idikimupel.cs
*/

const http = require("http");
const url = require("url");

const routes = {
    parsetime: function (date) {
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    },
    unixtime: function (date) {
        return {
            unixtime: date.getTime()
        }
    }
};

http.createServer(function(req, res){
    var type = url.parse(req.url);
    
    var time = type.query.split('&').reduce((a, b) => { 
        var couple = b.split('=');
        a[couple[0]] = couple[1];
        
        return a;
    }, {}).iso;
    
    var path = type.pathname.split('/').pop();
    
    res.write(JSON.stringify(routes[path](new Date(time))));
    res.end();
}).listen(process.argv[2]);

