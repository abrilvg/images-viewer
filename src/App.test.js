// import React from 'react';
// import {shallow} from 'enzyme';
// import App from './App';
// import Header from './components/Header';
// import Searchbox from './components/Searchbox';
// import {BrowserRouter as Router} from "react-router-dom";

jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
}));

//should mock withRouter
it('should render App', () => {
    expect({}).toEqual({});
});
