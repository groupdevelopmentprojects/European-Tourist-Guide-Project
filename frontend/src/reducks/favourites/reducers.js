// THIS FILE IS USED TO HANDLE THE REDUCER OF THE STATE

import * as Actions from './actions';
import initialState from '../store/initialState';


// Create Favourites reducer
export const FavouritesReducer = (state = initialState.favourites, action) => {
    switch(action.type) {
        case Actions.ADD_FAVOURITES:
            return {
                ...state,
                list: action.list,
            }
        case Actions.FETCH_FAVOURITES:
            return {
                ...state,
                list: action.list,
            }
        case Actions.DELETE_FAVOURITES:
            return {
                ...state,
                list: action.list,
            }    
        default:
            return state
    }
}