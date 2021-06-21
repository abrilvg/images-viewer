import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import QueryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Photos from './components/Photos';
import Loader from './components/Loader';
import Message from './components/Message';
import {getPhotos} from './actions/actions';
import useInfiniteScroll from './hooks/InfiniteScroll';

const App = ({history}) => {
    const location = useLocation();
    const {search} = location;
    const filters = QueryString.parse(search);

    const dispatch = useDispatch();
    const photos = useSelector(store => store.photos);
    const error = useSelector(store => store.error);
    const loading = useSelector(store => store.loading);
    const completedPhotosList = useSelector(store => store.completedPhotosList);

    const today = new Date();
    const initialFilters = {
        sol: 1000,
        rover: 'curiosity',
        page: 1,
        earth_date: today.toLocaleDateString()
    };

    const fetchMoreListItems = () => {
        if (!completedPhotosList && !loading && !error) {
            setTimeout(() => {
                const currentPage = parseInt(filters.page);
                const updatedFilters = {...filters, page: currentPage+1};
                history.push(`?${QueryString.stringify(updatedFilters)}`);
                setIsFetching(false);
            }, 1000);
        }
    };

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    const handleClearFilters = () => {
        history.push(`?${QueryString.stringify(initialFilters)}`);
    };

    useEffect(() => {
        if (location.search === '') {
            history.push(`?${QueryString.stringify(initialFilters)}`);
        } else {
            getPhotos(dispatch, filters);
        }
    }, [location]);

    return (
        <section>
            <Header clearFilters={handleClearFilters} />
            <Searchbox/>
            {photos.length > 0 && <Photos list={photos}/>}
            {photos.length === 0 && !error && <Message text="No photos found with current filters"/>}
            {isFetching && !completedPhotosList && !error && <Loader/>}
            {photos.length > 0 && completedPhotosList && <Message text="No more photos to load"/>}
            {error && <Message danger text={error}/>}
        </section>
    );
}

export default withRouter(App);
