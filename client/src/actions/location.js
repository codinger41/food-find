
import { USER_LOCATION } from './actionTypes';

export const setUserLocation = (position) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOCATION,
      data: position
    });
  };
};
