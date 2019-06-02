require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var artist = process.argv[3]
if (command === "concert-this") {
    const axios = require('axios');

    // Make a request for a user with a given ID
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(url);

    axios.get(url)
        .then(function (response) {
            // handle success
            //console.log(response);

            var data = response.data;

            for (i = 0; i < data.length; i++) {
                var object = data[i];
                console.log("Name of the Venue: " + object.venue.name);
                console.log("Venue Location: " + object.venue.city);
                console.log("Date of the Event: " + object.datetime);
                console.log("-----------------------------------------------------------------------------------------------------");
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}


/*if (command === "spotify-this-song") {
    const axios = require('axios');

    var url = "https://www.npmjs.com/package/node-spotify-api";
    console.log(url);
    axios.get(url)
        .then(function (response) {

            var data = response.data;

            for (i = 0; i < data.length; i++) {
                var object = data[i];
                console.log("song:" + object.song.name);
                console.log("Artist: " + object.artist.celine.dion);
                console.log("Song: " + object.song.Because you loved me);
                console.log("A preview link of the song: " + https://www.youtube.com/watch?v=JDcuRgk-JEI);
                    console.log("Album:" + object.album.song);
                console.log("-----------------------------------------------------------------------------------------------------");
            }

        }*/
