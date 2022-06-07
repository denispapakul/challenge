import {combineReducers} from 'redux';
import auth from './auth';
import cards from './cards'

const rootReducer = combineReducers({
  auth,
  cards,
});

export default rootReducer;
