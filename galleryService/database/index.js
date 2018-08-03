var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoeGallary";
var sampleData = require('./sampleData.js');



//insert fake data in shoe db in mongo
// promise now updataed
var dbSetup = new Promise(function(resolve,reject){
	MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var shoesDb = db.db('shoeGallary');
	  shoesDb.dropCollection("shoeGallary", function(err, delOK) {
		if (err) throw err;
		shoesDb.collection("shoeGallary").insertMany(sampleData , (err, res) => {
		  	if(err) throw err;
			resolve(res.ops[0]);
			db.close();
		  })
	  });
	});
})





module.exports.getData = dbSetup
