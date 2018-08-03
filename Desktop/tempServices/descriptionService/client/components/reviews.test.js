import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reviews from './reviews.jsx'


describe('Reviews Component', () => {
	it('Reviews Component should render as expected', () => {
		const wrapper = shallow(<Reviews />)
		expect(wrapper).toMatchSnapshot();
	});

});