// THIS FILE IS USED TO HANDLE THE REDUCER/TASK OF THE STATE

// Import Actions
import * as Actions from './actions';
// Import initialState
import initialState from '../store/initialState';

// Create Places reducer
export const PlacesReducer = (state = initialState.places, action) => {
    switch(action.type) {
        case Actions.ADD_PLACE:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_PLACE:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}