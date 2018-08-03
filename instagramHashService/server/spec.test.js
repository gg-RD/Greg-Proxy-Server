var server = require('./server.js');
var axios = require('axios')

test('gets two objects in an array of server response', () => {
  axios.post('/shoes/shoe')
  .then((response) => {
    axios.get('/shoes/shoe')
    .then( (response) => {
      //console.log(response.data);
      expect(response.length).toBe(2)
    })
    .catch( (error) => {
      console.log(error);
    });
  })
  .catch( (error) => {
    console.log(error);
  });

});
