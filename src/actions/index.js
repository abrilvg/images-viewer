import QueryString from 'query-string';
import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR,
    SAVE_SEARCH_SUCCESS,
    CLEAR_ALL_SEARCHES_SUCCESS
} from '../actiontypes/index';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = '2AKoz9U2oRHriOMf7IYEgJVrhagwKNAeCbCC6AsT';
// const apiKey = 'DEMO_KEY';

const getPhotos = async (dispatch, filterParams) => {

    let query = {...filterParams, api_key: apiKey};

    const rover = query.rover;
    delete query.rover;

    if (!query.page) {
        query.page = 1;
    }

    try {
        dispatch({
            type: GET_PHOTOS_START
        });
        const result = await fetch(`${url}/${rover}/photos?${QueryString.stringify(query)}`);
        if (result.status >= 400 && result.status < 600) {
            throw result.statusText;
        }
        const response = await result.json();

        dispatch({
            type: GET_PHOTOS_SUCCES,
            photos: response.photos,
            completedPhotosList: response.photos?.length < 25,
            firstPage: parseInt(query.page) === 1
        });
    } catch(error) {
        dispatch({
            type: GET_PHOTOS_ERROR,
            error: `${error}, please try again`
        });
        throw error;
    };
}

const saveSearch = (dispatch, search) => {
    dispatch({
        type: SAVE_SEARCH_SUCCESS,
        search
    });
};

const clearAllSearches = (dispatch) => {
    dispatch({
        type: CLEAR_ALL_SEARCHES_SUCCESS
    });
};

export {
    getPhotos,
    saveSearch,
    clearAllSearches
};
