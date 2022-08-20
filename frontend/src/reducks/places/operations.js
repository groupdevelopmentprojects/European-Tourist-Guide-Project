// THIS FILE IS USED TO HANDLE THE ACTIONS OPERATION FOR API

// Import API
import API from '../../API';
// Import fetchPlacesAction
import { fetchPlacesAction } from './actions';

const api = new API();

// Fetch categories func that async dispatches and returns the api places; returns an error if failed to connect to api
export const fetchPlaces = () => {
    return async (dispatch) => {
        return api.getPlaces()
        .then((categories) => {
            dispatch(fetchPlacesAction(places));
        }).catch((error) => {
            alert('Failed to connect API: /places/');
        });
    }
}