import { createStore } from 'redux';

import rootReducer from './reducers/index';

// import data
import reviews from './data';

// create and object for the default data
const defaultState = {
  reviews,
};

const store = createStore(rootReducer, defaultState);


export default store;
