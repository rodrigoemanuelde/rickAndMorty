import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import userReducer, { restoreSessionnAction } from './userDuck';
import charsReducer, { getCharacterAction } from './charsDuck';
import thunck from 'redux-thunk';

let rootReducer = combineReducers({
  user: userReducer,
  characters: charsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunck)));
  //consigue los personajes
  getCharacterAction()(store.dispatch, store.getState);
  restoreSessionnAction()(store.dispatch);
  return store;
}
