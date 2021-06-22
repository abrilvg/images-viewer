import React from 'react';
import {shallow} from 'enzyme';
import Photos from './index';
import Photo from '../Photo';

it('should render Photos', () => {
    const wrapper = shallow(<Photos list={[{id:1}, {id:2}, {id: 3}]} />);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find(Photo).length).toEqual(3);
});
