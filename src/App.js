import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import QueryString from 'query-string';
import { withRouter } from 'react-router-dom';

import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Photos from './components/Photos';
import {getPhotos} from './actions/actions';

const App = ({history}) => {

    const photos = useSelector(store => store.photos);

    const dispatch = useDispatch();

    let filters;

    useEffect(() => {
        
        if (history.location.search === '') {
            filters = {
                sol: 1000,
                rover: 'curiosity'
            };
            history.push(`?${QueryString.stringify(filters)}`);
        } else {
            filters = QueryString.parse(history.location.search);
            getPhotos(dispatch, filters);
        }
    }, [history.location]);

    return (
        <section>
            <Header />
            <Searchbox />
            <Photos list={photos}/>
        </section>
    );
}

export default withRouter(App);
