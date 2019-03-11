import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import locationReducer from './locationReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  restaurantsReducer,
  locationReducer,
  modalReducer,
});
