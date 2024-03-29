var util  = require("util");
var mXm  = require("musixmatch");

mXm.Config.API_KEY = "b386a62dc65c5a811e861981a22bda94";

MusixMatchParser = function (res){ 
	this.res = res;
	this.parseResponse = (function(that){
		return function (musixMatchResponse){
			var lyrics = musixMatchResponse.attributes.subtitle_body;
			var lyricsAndTimeStamps = lyrics.split(/\[(.*?)\]/).slice(1);
			var niceObject = {timeLyricPairs : []};
			for(var i =0; i<lyricsAndTimeStamps.length; i+=2){
				niceObject.timeLyricPairs.push({time : that.convert(lyricsAndTimeStamps[i]),
					lyric : lyricsAndTimeStamps[i+1]
				});
				//niceObject[lyricsAndTimeStamps[i]] = lyricsAndTimeStamps[i+1];
			}
			that.res.json(niceObject);
		}
	}(this));
}

MusixMatchParser.prototype.convert = function(timeStamp){
  	var bits = timeStamp.split(':');
  	var minutes = parseFloat(bits[0]) * 60;
  	var seconds = parseFloat(bits[1]);
    return seconds + minutes;
  }

MusixMatchParser.prototype.onError = function(response) {
  console.log("Error callback:");
  console.log("  " + util.inspect(response));
};

MusixMatchParser.prototype.getTrackLyrics = function(trackId){
	var that = this;
	return mXm.API.getSubtitle(14201829, that.parseResponse, that.onError);
};

exports.create = function(res){
	return new MusixMatchParser(res);
}
