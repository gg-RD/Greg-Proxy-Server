const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3004;
var Shoe = require('./../database/index.js')
var instagram = require('./../instagram/requestsInstagram.js');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/instaShoe', function (req, res) {;
  console.log(Shoe);
  Shoe.Shoe.find(function (err, repos) {
    if (err) return next(err);
    res.json(repos);
  });
});

app.post('/instaShoe', function (req, res) {
  console.log(req);
  instagram.getTags((response)=>{
    response.forEach((i) => {
      Shoe.Shoe.find({image_url:i.images.standard_resolution.url}, (err, docs) => {
        if(docs.length){
          console.log(docs, 'already exists');
        }
        else{
          Shoe.Shoe.create({
             insta_user:`@${i.user.full_name}`,
             likes: i.likes.count,
             image_url: i.images.standard_resolution.url,
             name_shoe: i.tags,
             user_image_url: i.user.profile_picture,
             created_at: i.created_time
           });
        }
      });
    })
    res.status(201).send();
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
