import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
  compose
} from 'redux';
// 
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';

import { PostsReducer } from '../posts/reducers';
// Import reducers
import { CategoriesReducer } from '../categories/reducers';
import { FavouritesReducer } from '../favourites/reducers';
import { PlacesReducer } from '../places/reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      places: PlacesReducer,
      categories: CategoriesReducer,
      favourites: FavouritesReducer,
    }),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
      // DEBUG MODE
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
  )
}
