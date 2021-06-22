import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

it('should render Loader', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find('div').length).toEqual(1);
});
