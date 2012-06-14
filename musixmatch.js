var http = require('http'),
	util = require('util');
/*
function makeRequest(){
	var options = {
	  host: 'api.musixmatch.com',
	  port: 80,
	  path: '/ws/1.1/track.subtitle.get?track_mbid=e2c9d3b3-8d55-4979-b54c-ccb3cd6dde74&apikey=b386a62dc65c5a811e861981a22bda94&format=xml',
	  method: 'GET'
	};
	http.request(options, function(resp){
	resp.setEncoding('utf8');
	resp.on('data', function(chunk){
    	console.log(chunk);
  	});
		//processData(resp);
		this.response = resp;
	}).on("error", function(e){
	  console.log("Got error: " + e.message);
	});
}

*/


function processData(musixmatchResponse){
	var lyrics = musixmatchResponse.body.subtitle.subtitle_body;

	var splitTimeStampsAndLyrics = function (){
		var lyricsAndTimeStamps = lyrics.split(/\[(.*?)\]/).slice(1);
		var niceObject = {};
		for(var i =0; i<lyricsAndTimeStamps.length; i+=2){
			niceObject[lyricsAndTimeStamps[i]] = lyricsAndTimeStamps[i+1];
		}
		console.log(niceObject);
		return niceObject;
	}
}

var options = {
  host: 'api.musixmatch.com',
  port: 80,
  path: '/ws/1.1/track.subtitle.get?track_mbid=e2c9d3b3-8d55-4979-b54c-ccb3cd6dde74&apikey=b386a62dc65c5a811e861981a22bda94&format',
  method: 'GET',
  headers: {'content-type':'application/json'}
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(util.inspect(chunk))
    //console.log(JSON.parse(chunk));
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
