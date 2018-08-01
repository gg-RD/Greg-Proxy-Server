//3001
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const db = require('../database/index.js');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/description/air_force_1', function(req, res){

	db.find(function(docs){
		res.send(JSON.stringify(docs));
	})


});

app.post('/description/add', function(req,res){
	db.add();
	res.end();
})



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});