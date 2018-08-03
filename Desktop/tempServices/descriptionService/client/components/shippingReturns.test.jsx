import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ShippingReturns from './shippingReturns.jsx'


describe('ShippingReturns Component', () => {
	it('ShippingReturns Component should render as expected', () => {
		const wrapper = shallow(<ShippingReturns />)
		expect(wrapper).toMatchSnapshot();
	});

});ShippingReturns