// THIS FILE IS USED TO HANDLE THE REDUCER/TASK OF THE STATE

// Import Actions
import * as Actions from './actions';
// Import initialState
import initialState from '../store/initialState';

// Create Categories reducer
export const CategoriesReducer = (state = initialState.categories, action) => {
    switch(action.type) {
        case Actions.ADD_CATEGORY:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_CATEGORY:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}