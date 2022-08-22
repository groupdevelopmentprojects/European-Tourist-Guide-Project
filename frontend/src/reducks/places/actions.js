// THIS FILE IS USED TO EXPORT ACTIONS FOR USE IN OTHER FILES: ADD / FETCH PLACE

// EXPORT ADD PLACE
export const ADD_PLACE = 'ADD_PLACE';
// EXPORT addPlaceAction func for use in other files
export const addPlaceAction = (places) => {
    return {
        type: 'ADD_PLACE',
        payload: places
    }
}
// EXPORT FETCH PLACE
export const FETCH_PLACE = 'FETCH_PLACE';
// EXPORT fetchPlacesAction for use in other files
export const fetchPlacesAction = (places) => {
    return {
        type: FETCH_PLACE,
        payload: places
    }
}