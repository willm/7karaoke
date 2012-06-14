var http = require('http');

var options = {
  host: 'api.musixmatch.com',
  port: 80,
  path: '/ws/1.1/track.subtitle.get?track_mbid=e2c9d3b3-8d55-4979-b54c-ccb3cd6dde74&apikey=b386a62dc65c5a811e861981a22bda94&format=xml'
};

http.get(options, function(resp){
  //resp.on('data', function(chunk){
    console.log(resp);
    //do something with chunk
  //});
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

//http://api.musixmatch.com/ws/1.1/track.subtitle.get?track_mbid=e2c9d3b3-8d55-4979-b54c-ccb3cd6dde74&apikey=b386a62dc65c5a811e861981a22bda94&format=xml
