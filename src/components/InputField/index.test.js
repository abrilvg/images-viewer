import React from 'react';
import {shallow} from 'enzyme';
import InputField from './index';

it('should render InputField', () => {
    const wrapper = shallow(<InputField type="number" label={'Input label'} onChange={()=>{}} />);

    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
});
