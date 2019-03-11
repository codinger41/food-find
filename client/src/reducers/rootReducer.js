import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  restaurantsReducer,
  locationReducer,
});
