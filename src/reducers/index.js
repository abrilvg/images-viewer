import {createStore} from 'redux';
import Immutable from 'seamless-immutable';
import {
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR,
    GET_PHOTOS_START,
    SAVE_SEARCH_SUCCESS,
    CLEAR_ALL_SEARCHES_SUCCESS
} from '../actiontypes/index';

const initialState = Immutable({
    photos: [],
    completedPhotosList: false,
    loading: false,
    savedSearches: JSON.parse(localStorage.getItem('__savedSearches') || '[]')
});

const photosStore = (state = initialState, action) => {
    switch(action.type) {
        case GET_PHOTOS_SUCCES:
            let updatedPhotos;
            if (action.firstPage) {
                updatedPhotos = action.photos;
            } else {
                updatedPhotos = [...state.photos, ...action.photos];
            }
            return state.merge({
                photos: updatedPhotos,
                completedPhotosList: action.completedPhotosList,
                loading: false
            });
        case GET_PHOTOS_ERROR:
            return state.merge({
                error: action.error,
                loading: false
            });
        case GET_PHOTOS_START:
            return state.merge({
                loading: false
            });
        case SAVE_SEARCH_SUCCESS:
            const updatedSearches = [...state.savedSearches, action.search];
            localStorage.setItem('__savedSearches', JSON.stringify(updatedSearches));
            return state.merge({
                savedSearches: updatedSearches
            });
        case CLEAR_ALL_SEARCHES_SUCCESS:
            localStorage.removeItem('__savedSearches');
            return state.merge({
                savedSearches: []
            });
        default:
            return state;
    }
};

const store = createStore(photosStore);

export {photosStore as PhotosStore};

export default store;
