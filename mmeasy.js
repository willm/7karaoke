var util  = require("util");
var mXm  = require("musixmatch");

mXm.Config.API_KEY = "b386a62dc65c5a811e861981a22bda94";

MusixMatchParser = function (){};

MusixMatchParser.prototype.parseResponse = function (musixMatchResponse){
	var lyrics = musixMatchResponse.attributes.subtitle_body;
	var splitTimeStampsAndLyrics = function (){
		var lyricsAndTimeStamps = lyrics.split(/\[(.*?)\]/).slice(1);
		var niceObject = {};
		for(var i =0; i<lyricsAndTimeStamps.length; i+=2){
			niceObject[lyricsAndTimeStamps[i]] = lyricsAndTimeStamps[i+1];
		}
		console.log(niceObject);
		return niceObject;
	}
	splitTimeStampsAndLyrics(lyrics);
}

MusixMatchParser.prototype.onError = function(response) {
  console.log("Error callback:");
  console.log("  " + util.inspect(response));
};

MusixMatchParser.prototype.getTrackLyrics = function(trackId){
	var that = this;
	mXm.API.getSubtitle(14201829, that.parseResponse, that.onError);
};

new MusixMatchParser().getTrackLyrics(14201829);
