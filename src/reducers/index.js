import {createStore} from 'redux';
import Immutable from 'seamless-immutable';
import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR
} from '../actiontypes/index';

const initialState = Immutable({
    photos: []
});

const photosStore = (state = initialState, action) => {
    switch(action.type) {
        case GET_PHOTOS_SUCCES:
            return state.merge({
                photos: action.payload.photos,
            });
        default:
            return state;
    }
}

const store = createStore(photosStore);

export default store;
