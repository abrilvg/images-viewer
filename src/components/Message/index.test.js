import React from 'react';
import { shallow } from 'enzyme';
import Message from './index';

it('should render Message', () => {
    const wrapper = shallow(<Message text={'No photos found'}/>);

    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').text()).toEqual('No photos found');
});
