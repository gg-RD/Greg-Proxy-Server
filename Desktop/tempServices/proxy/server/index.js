const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/shoes', (req, res) => {
  const options = {
    url: 'http://localhost:3005/shoes'
  }
  console.log(options)
  request(options, (err, response, body) => {
    res.send(body);
  })
});

app.get('/flyknit', (req, res) => {
  const options = {
    url: 'http://localhost:3003/flyknit'
  }
  request(options, (err, response, body) => {
    res.send(body);
  })
})

app.get('/instaShoe', (req, res)=> {
  const options = {
    url: 'http://localhost:3004/instaShoe'
  }
  request(options, (err, response, body) => {
    res.send(body);
  })
});
app.post('/instaShoe', (req, res)=> {
  const options = {
    url: 'http://localhost:3004/instaShoe'
  }
  request(options, (err, response, body) => {
    res.send(body);
  })
})

app.get('/description/air_force_1', (req, res) => {
  const options = {
    url: 'http://localhost:3001/description/air_force_1'
  }
  request(options, (err, response, body) => {
    console.log(body)
    // res.send(body);
  })
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});