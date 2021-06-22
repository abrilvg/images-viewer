import React from 'react';
import {shallow} from 'enzyme';
import DateField from './index';

it('should render DateField', () => {
    const wrapper = shallow(<DateField label={'Date label'} onChange={()=>{}} />);

    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
});
