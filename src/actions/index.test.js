import {getPhotos, saveSearch, clearAllSearches} from './index';
import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    SAVE_SEARCH_SUCCESS,
    CLEAR_ALL_SEARCHES_SUCCESS
} from '../actiontypes/index';

describe('actions', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        fetch.resetMocks();
    });

    describe('getPhotos', () => {
        it('should call dispatch with GET_PHOTOS_SUCCES type', async () => {
            fetch.mockResponseOnce(JSON.stringify({photos:[{id: 123}]}));

            const expectedStartAction = {
                type: GET_PHOTOS_START
            }
            const expectedSuccessAction = {
                type: GET_PHOTOS_SUCCES,
                photos: [{id: 123}],
                completedPhotosList: true,
                firstPage: true
            }
            await getPhotos(mockDispatch, {page: 1, rover: 'Spirit'});

            expect(fetch).toHaveBeenCalledWith('https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/photos?api_key=2AKoz9U2oRHriOMf7IYEgJVrhagwKNAeCbCC6AsT&page=1');
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);

        })
    });

    describe('saveSearch', () => {
        it('should dipatch SAVE_SEARCH_SUCCESS with search data', () => {
            const search = {
                page: 1,
                rover: 'Spirit',
                sol: 1000
            };
            const expectedAction = {
                type: SAVE_SEARCH_SUCCESS,
                search
            };
            saveSearch(mockDispatch, search);

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
        });
    });

    describe('clearAllSearches', () => {
        it('should dipatch SAVE_SEARCH_SUCCESS with search data', () => {
            const expectedAction = {
                type: CLEAR_ALL_SEARCHES_SUCCESS,
            };
            clearAllSearches(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledTimes(1);
            expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
