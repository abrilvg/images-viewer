import {PhotosStore} from './index';
import Immutable from 'seamless-immutable';
import {
    GET_PHOTOS_SUCCES,
    GET_PHOTOS_ERROR,
    GET_PHOTOS_START,
    SAVE_SEARCH_SUCCESS,
    CLEAR_ALL_SEARCHES_SUCCESS
} from '../actiontypes/index';

describe('PhotosStore', () => {
    it('should return the initial state', () => {
        expect(PhotosStore(undefined, {})).toEqual({
            photos: [],
            completedPhotosList: false,
            loading: false,
            savedSearches: []
        })
    });

    it('should handle GET_PHOTOS_SUCCES', () => {
        const photos = [
            {id: '123'},
            {id: '456'}
        ];

        const updatedStore = PhotosStore(undefined, {
            type: GET_PHOTOS_SUCCES,
            photos,
            firstPage: true,
            completedPhotosList: true,
        });

        expect(updatedStore.photos).toEqual(photos);
        expect(updatedStore.completedPhotosList).toBeTruthy();
        expect(updatedStore.firstPage).toBeFalsy();
        expect(updatedStore.loading).toBeFalsy();
    });

    it('should handle GET_PHOTOS_ERROR', () => {
        const error = '404 not found';

        const updatedStore = PhotosStore(undefined, {
            type: GET_PHOTOS_ERROR,
            error
        });

        expect(updatedStore.error).toEqual(error);
        expect(updatedStore.loading).toBeFalsy();
    });

    it('should handle GET_PHOTOS_START', () => {

        const updatedStore = PhotosStore(undefined, {
            type: GET_PHOTOS_START
        });

        expect(updatedStore.loading).toBeFalsy();
    });

    it('should handle SAVE_SEARCH_SUCCESS', () => {
        const search = {
            page: 1,
            sol: 10000
        };

        const updatedStore = PhotosStore(undefined, {
            type: SAVE_SEARCH_SUCCESS,
            search
        });

        expect(updatedStore.savedSearches).toEqual([search]);
    });

    it('should handle CLEAR_ALL_SEARCHES_SUCCESS', () => {

        const updatedStore = PhotosStore(undefined, {
            type: CLEAR_ALL_SEARCHES_SUCCESS,
        });

        expect(updatedStore.savedSearches).toEqual([]);
    });
});