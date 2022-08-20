// THIS FILE IS USED TO EXPORT ACTIONS FOR USE IN OTHER FILES: ADD / FETCH / DELETE FAVOURITES

// EXPORT ADD FAVOURITES
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
// EXPORT addFavouritesAction func for use in other files
export const addFavouritesAction = (favourites) => {
    return {
        type: 'ADD_FAVOURITES',
        list: favourites,
    }
}
// EXPORT FETCH FAVOURITES
export const FETCH_FAVOURITES = 'FETCH_FAVOURITES';
// EXPORT fetchFavouritesAction for use in other files
export const fetchfavouritesAction = (favourites) => {
    return {
        type: FETCH_FAVOURITES,
        list: favourites,
    }
}
// EXPORT DELETE FAVOURITES
export const DELETE_FAVOURITES = 'DELETE_FAVOURITES';
// EXPORT deleteFavouritesAction for use in other files
export const deleteFavouritesAction = (favourites) => {
    return {
        type: 'DELETE_FAVOURITES',
        list: favourites,
    }
}