import {createStore} from 'redux';
import Immutable from 'seamless-immutable';
import {
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR,
    GET_PHOTOS_START
} from '../actiontypes/index';

const initialState = Immutable({
    photos: [],
    completedPhotosList: false,
    loading: false
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
        default:
            return state;
    }
};

const store = createStore(photosStore);

export default store;
