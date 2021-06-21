import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Photos from './components/Photos';
import {getPhotos} from './actions/actions';

import './App.scss';

const App = () => {

    const photos = useSelector(store => store.photos);

    const dispatch = useDispatch();

    useEffect(() => {
        getPhotos(dispatch);
    }, []);

    return (
        <div className="app">
            <Header />
            <Searchbox />
            <Photos list={photos}/>
        </div>
    );
}

export default App;
