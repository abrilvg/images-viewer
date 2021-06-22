import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import SelectField from '../SelectField';

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn()
}));

it('should render Header', () => {
    const clearFilters = jest.fn();
    const history = {location:{search:''}, push: jest.fn()};
    const wrapper = shallow(<Header history={history} clearFilters={clearFilters} />);

    wrapper.find('a').simulate('click');
    expect(clearFilters).toHaveBeenCalledTimes(1);

    wrapper.find(SelectField).simulate('change');
    expect(history.push).toHaveBeenCalledTimes(1);

    expect(wrapper.find('a').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find(SelectField).length).toEqual(1);
});
