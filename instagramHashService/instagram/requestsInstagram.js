var axios = require('axios');
var access_token = require('./instagram_token.js').access_token


var getTags = function(callback) {
  let media = [];
  var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
  url = url + access_token;
  axios.get(url)
  .then( function (response) {
//      console.log(response.data);
    media = response.data.data;
    callback(media);
  })
  .catch( function(error) {
    console.log(error);
  });
  }

getTags( (response) => {
  console.log(response.length);
  //return response;
} )

module.exports.getTags = getTags;

getTags(console.log);