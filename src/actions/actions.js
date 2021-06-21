import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR
} from '../actiontypes/index';

// const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
// const apiKey = '2AKoz9U2oRHriOMf7IYEgJVrhagwKNAeCbCC6AsT';

const tempUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';

//set initial variables and filters, pagination
const getPhotos = async (dispatch, searchText) => {
    try{
        dispatch({
            type: GET_PHOTOS_START
        });
        // const result = await fetch(`${url}?api_key=${apiKey}`);
        const result = await fetch(tempUrl);
        const response = await result.json();

        dispatch({
            type: GET_PHOTOS_SUCCES,
            payload: response
        });
    } catch(err) {
        dispatch({
            type: GET_PHOTOS_ERROR
        });
        throw err;
    };
}

export {
    getPhotos
};