import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/index';

// import data
import reviews from './data';

// create and object for the default data
const defaultState = {
  reviews,
};

// const store = createStore(rootReducer, defaultState);
const store = applyMiddleware(thunk)(createStore)(rootReducer);



export default store;
