// THIS FILE IS USED TO HANDLE THE SELECTOR OF THE STATE

import {createSelector} from 'reselect';

const placesSelector = (state) => state.places;

export const getPlaces = createSelector(
    [placesSelector],
    state => state.list
);