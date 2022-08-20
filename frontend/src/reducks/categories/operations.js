// THIS FILE IS USED TO HANDLE THE ACTIONS OPERATION FOR API

// Import API
import API from '../../API';
// Import fetchCategoriesAction
import { fetchCategoriesAction } from './actions';

const api = new API();

// Fetch categories func that async dispatches and returns the api categories; returns an error if failed to connect to api
export const fetchCategories = () => {
    return async (dispatch) => {
        return api.getCategories()
        .then((categories) => {
            dispatch(fetchCategoriesAction(categories));
        }).catch((error) => {
            alert('Failed to connect API: /categories/');
        });
    }
}