import React from 'react';
import {shallow} from 'enzyme';
import Photo from './index';

it('should render Photo', () => {
    const photo = {rover: {landing_date: '2020-08-05', landing_date: '2020-07-07'}};
    const wrapper = shallow(<Photo photo={photo} />);

    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('strong').length).toEqual(2);
});
