var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
	 var address = socket.request.connection.remoteAddress;
	 var port=socket.request.connection.remotePort;
	console.log('Connection to '+address+' : '+port+' client established');
  socket.on('message', function(msg){
    io.emit('message', address+' : 'msg);
  });
  socket.on('disconnect',function(){
        console.log('Server has '+address+' : '+port+'disconnected');
    });
});

http.listen(port, function(){
 console.log('Server running at http://127.0.0.1:' + port + '/');
});
