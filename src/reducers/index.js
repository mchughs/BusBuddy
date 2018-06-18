import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reviews from './reviews';
import companies from './companies';

const rootReducer = combineReducers({ reviews, companies, routing: routerReducer });

export default rootReducer;
