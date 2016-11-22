import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';


import info from './info';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  multireducer: multireducer({
    counter1: info,
    counter2: info,
    counter3: info
  }),
  info
});
