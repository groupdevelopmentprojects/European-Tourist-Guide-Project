// THIS FILE IS USED TO HANDLE THE SELECTOR OF THE STATE

import {createSelector} from 'reselect';

const categoriesSelector = (state) => state.categories;

export const getCategories = createSelector(
    [categoriesSelector],
    state => state.list
);