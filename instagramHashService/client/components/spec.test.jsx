import React from 'react';
import Info from './iteminfo.jsx';
import ShoeList from './iteminfo.jsx';
import { mount } from 'enzyme';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

var exampleData = [ { id: '1827918187418364500_8255024479',
    user:
     { id: '8255024479',
       full_name: 'hack reactor gg',
       profile_picture: 'https://instagram.fdac10-1.fna.fbcdn.net/vp/eaf4663b993b22ab3c90681222cba10e/5C0B007A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg',
       username: 'hackreactorggrd' },
    images:
     { thumbnail: [Object],
       low_resolution: [Object],
       standard_resolution: [Object] },
    created_time: '1532124850',
    caption:
     { id: '17941740733080631',
       text: '#AirMax98',
       created_time: '1532124850',
       from: [Object] },
    user_has_liked: true,
    likes: { count: 1 },
    tags: [ 'airmax98' ],
    filter: 'Normal',
    comments: { count: 0 },
    type: 'image',
    link: 'https://www.instagram.com/p/BleEegfjCpU/',
    location: null,
    attribution: null,
    users_in_photo: [] },
  { id: '1827798596344187322_8255024479',
    user:
     { id: '8255024479',
       full_name: 'hack reactor gg',
       profile_picture: 'https://instagram.fdac10-1.fna.fbcdn.net/vp/eaf4663b993b22ab3c90681222cba10e/5C0B007A/t51.2885-19/11906329_960233084022564_1448528159_a.jpg',
       username: 'hackreactorggrd' },
    images:
     { thumbnail: [Object],
       low_resolution: [Object],
       standard_resolution: [Object] },
    created_time: '1532110593',
    caption:
     { id: '17947938481112491',
       text: '#AirMax97',
       created_time: '1532110593',
       from: [Object] },
    user_has_liked: true,
    likes: { count: 5 },
    tags: [ 'airmax97' ],
    filter: 'Normal',
    comments: { count: 0 },
    type: 'image',
    link: 'https://www.instagram.com/p/BldpSOoDYm6/',
    location:
     { latitude: 37.78371,
       longitude: -122.40896,
       name: 'Hack Reactor',
       id: 70325290 },
    attribution: null,
    users_in_photo: [] } ]


describe('<Info />', () => {
  it('calls componentDidMount', () => {
      sinon.spy(Info.prototype, 'componentDidMount');
      var wrapper = mount(<Info />);
      expect(Info.prototype.componentDidMount.calledOnce).toBe(true);
      wrapper.unmount();
    });

});

describe('<ShoeList />', () => {
  it('allows us to set props and click event', () => {
    var onButtonClick = sinon.spy()
    var wrapper = mount(<ShoeList
      list1={exampleData}
      list2={exampleData}
      list3={exampleData}
      list={exampleData}
      onButtonClick={onButtonClick}
      />);
    expect(wrapper.find('.flex-container').childAt(2).props().id).toBe('hidden');
    console.log(wrapper.find('.flex-container').childAt(2).props().id);
    wrapper.find('.show-remaining').simulate('click');
    console.log(wrapper.find('.flex-container').childAt(2).props().id);
    expect(wrapper.find('.flex-container').childAt(2).props().id).toMatch('flex-container3');
  });


});
