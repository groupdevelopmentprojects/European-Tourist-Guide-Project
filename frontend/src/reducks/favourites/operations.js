// THIS FILE IS USED TO HANDLE THE ACTIONS OPERATION FOR API

// Import API
import API from '../../API';
// Import add/fetch/deleteFavouritesAction
import { addFavouritesAction, fetchfavouritesAction, deleteFavouritesAction } from './actions';

const api = new API();

// Create a reference to favourites by key
const FAVOURITES_KEY = 'FAVOURITES_KEY';
// Fetch from locale storage func that retrieves favourites key; if there is a key the empty list parses JSON data
export const fetchFromLocaleStorage = () => {
    return async (dispatch) => {
        let favouritesJSON = localStorage.getItem(FAVOURITES_KEY);
        let favourites = [];
        if (favouritesJSON) {
            favourites = JSON.parse(favouritesJSON);
        }
        dispatch(fetchfavouritesAction(favourites));
    }
}
// Create an add favourite func that saves prev favourite state
export const addFavourite = (place) => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favourites.list;
        console.log('prevFavourites', place);
        let nextFavorites = prevFavourites
        if(!prevFavourites.some(favourite => favourite.id === place.id)){
            nextFavorites = [place, ...prevFavourites];
        }
        setToLocalStorage(nextFavorites);
        dispatch(addFavouritesAction(nextFavorites))
    }
}

// Create an delete favourite func that deletes the favorite from image by id
export const deleteFavourite = (id) => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favourites.list;
        const nextFavourites = prevFavourites.filter((image) => image.id !== id);
        setToLocalStorage(nextFavourites);
        dispatch(deleteFavouritesAction(nextFavourites));
    }
}

// Create a setToLocalStorage func that set favourites key
export const setToLocalStorage = (favourites) => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}