import React from 'react';
import {shallow} from 'enzyme';
import SelectField from './index';

it('should render SelectField', () => {
    const wrapper = shallow(
        <SelectField
            options={[{key:'1', name: 'test 1'}, {key:'2', name: 'test 2'}]}
            value="1"
            onChange={()=>{}}
            label="Select an option..."
        />
    );

    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('select').length).toEqual(1);
    expect(wrapper.find('option').length).toEqual(2);
});
