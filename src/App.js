import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Photos from './components/Photos';
import {getPhotos} from './actions/actions';

const App = () => {

    const photos = useSelector(store => store.photos);

    const dispatch = useDispatch();

    useEffect(() => {
        getPhotos(dispatch);
    }, []);

    return (
        <Router>
            <Header />
            <Searchbox />
            <Photos list={photos}/>
        </Router>
    );
}

export default App;
