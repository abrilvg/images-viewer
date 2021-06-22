import React from 'react';
import {shallow} from 'enzyme';
import Searchbox from './index';
import SelectField from '../SelectField';
import InputField from '../InputField';
import DateField from '../DateField';

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn()
}));

it('should render Searchbox', () => {
    const savedSearches = [];
    const history = {location:{search:''}, push: jest.fn()};
    const wrapper = shallow(<Searchbox history={history} savedSearches={savedSearches} />);

    wrapper.find(InputField).simulate('change');
    expect(history.push).toHaveBeenCalledTimes(1);

    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find(DateField).length).toEqual(1);
    expect(wrapper.find(InputField).length).toEqual(1);
    expect(wrapper.find(SelectField).length).toEqual(2);
});
