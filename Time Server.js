var net = require('net');
var port = process.argv[2];

var date = new Date();

//"YYYY-MM-DD hh:mm"  

var server = net.createServer(function(socket) {

    var str = date.getFullYear() + "-" + ('0' +
            (date.getMonth() + 1)).slice(-2) + "-" +
        ('0' + date.getDate()).slice(-2) + " " +
        ('0' + date.getHours()).slice(-2) + ":" +
        ('0' + date.getMinutes()).slice(-2);

    socket.write(str + "\n");
    socket.end(function() {
        //  console.log("server close");
    });

})
server.listen(port);

/* Official Solution */

var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function(socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
