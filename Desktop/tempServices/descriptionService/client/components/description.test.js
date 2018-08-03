import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Description from './description.jsx'


describe('Description Component', () => {
	it('Description Component should render as expected', () => {
		const wrapper = shallow(<Description />)
		expect(wrapper).toMatchSnapshot();
	});

});

