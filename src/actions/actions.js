import QueryString from 'query-string';
import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR
} from '../actiontypes/index';

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
// const apiKey = '2AKoz9U2oRHriOMf7IYEgJVrhagwKNAeCbCC6AsT';
const apiKey = 'DEMO_KEY';

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
        // const result = await fetch(`${url}/${rover}/photos?${QueryString.stringify(query)}`);
        // if (result.status >= 400 && result.status < 600) {
        //     throw result.statusText;
        // }
        // const response = await result.json();

        const response = {photos};

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

export {
    getPhotos
};

const photos = [
    {
        "id": 102693,
        "sol": 1000,
        "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-05-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    {
        "id": 102694,
        "sol": 1000,
        "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-05-30",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    }
];

