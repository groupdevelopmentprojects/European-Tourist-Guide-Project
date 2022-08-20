// THIS FILE IS USED TO HANDLE THE SELECTOR OF THE STATE

import {createSelector} from 'reselect';

const favouritesSelector = (state) => state.favourites;

export const getFavourites = createSelector(
    [favouritesSelector],
    state => state.list
);