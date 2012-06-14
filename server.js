var express = require('express'),
	mm = require('./mmeasy'),
	server = express.createServer();

server.use('/audio', express.static(__dirname + '/static/audio'));

server.get('/', function(req,res){
	mm.create(res).getTrackLyrics(14201829);
});

server.get('/test', function (req, res){
	res.sendfile(__dirname + '/static/index.html');
});

server.get('/lyrics', function (req, res){
	//res.json({'1' : 'hi my name is','2' : 'who?', '3': 'my name is..' });
	mm.create(res).getTrackLyrics(14201829);
})

	
server.listen(1212);
