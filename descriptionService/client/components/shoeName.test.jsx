import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShoeName from './shoeName.jsx';

configure({ adapter: new Adapter()});


describe('ShoeName Component', () => {
	it('ShoeName Component should render as expected', () => {
		const wrapper = shallow(<ShoeName />)
		wrapper.setProps({ data: [
			{ "_id" : ObjectId("5b5d4c6dba8975213d31b2f4"), "shoe_size" : [ ], "shoe_cat" : "Men's running Shoe", "shoe_price" : "$160", "shoe_name" : "Nike Epic React Flyknit", "shoe_descpription" : "The Nike Epic React Flyknit Men's Running Shoe provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.", "shoe_shown" : "CollegeNavy/Hyper Jade/Sail/Red Orbit Style: AR5413-400", "shoe_style" : "AR5413-400", "__v" : 0 }
			]})
		expect(wrapper).toMatchSnapshot();
	});

});ShoeName