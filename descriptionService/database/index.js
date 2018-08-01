var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/shoes');




var shoesSchema = mongoose.Schema({
	shoe_cat: String,
	shoe_price: String,
	shoe_name: String,
	shoe_size: [],
	shoe_descpription: String,
	shoe_shown: String,
	shoe_style: String
});



var ShoeDesc = mongoose.model('ShoeDesc', shoesSchema);

const add = () => {
	const shoe = new ShoeDesc ({
		shoe_cat: 'Men\'s running Shoe',
		shoe_price: '$160',
		shoe_name: 'Nike Epic React Flyknit',
		shoe_size: [],
		shoe_descpription: 'The Nike Epic React Flyknit Men\'s Running Shoe provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.',
		shoe_shown: 'CollegeNavy/Hyper Jade/Sail/Red Orbit Style: AR5413-400',
		shoe_style: 'AR5413-400'

	});

	shoe.save(function(error){
		console.log('shoe has been saved');

		if(error){
			console.log(error);
		}
	});
}

let find = (gotThedescriptions) => {
	ShoeDesc.find({}, function(err, docs){
		if(err){    
			console.log('error fetching descriptions from the database');
			return;
		}
		gotThedescriptions(docs);
	})
}

module.exports.find = find;
module.exports.add = add;









