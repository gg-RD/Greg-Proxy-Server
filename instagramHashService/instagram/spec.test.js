var instagram = require('./requestsInstagram.js');

test('gets two objects in an array', () => {
  instagram.getTags( (response) => {
    expect(response.length).toBe(2);
  } )
});
