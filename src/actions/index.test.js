import {getPhotos, saveSearch, clearAllSearches} from './index';
import {
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR,
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

            expect(fetch).toHaveBeenCalledWith('url');
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(1, expectedStartAction);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, expectedSuccessAction);

        })
    });
});
