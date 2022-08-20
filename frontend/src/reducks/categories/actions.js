// THIS FILE IS USED TO EXPORT ACTIONS FOR USE IN OTHER FILES: ADD / FETCH CATEGORY

// EXPORT ADD CATEGORY
export const ADD_CATEGORY = 'ADD_CATEGORY';
// EXPORT addCategoriesAction func for use in other files
export const addCategoriesAction = (categories) => {
    return {
        type: 'ADD_CATEGORY',
        payload: categories
    }
}
// EXPORT FETCH CATEGORY
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
// EXPORT fetchCategoriesAction for use in other files
export const fetchCategoriesAction = (categories) => {
    return {
        type: FETCH_CATEGORY,
        payload: categories
    }
}