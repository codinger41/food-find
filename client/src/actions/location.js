
import { MAP_CENTER } from './actionTypes';

export const setUserLocation = (position) => {
  return (dispatch) => {
    dispatch({
      type: MAP_CENTER,
      data: position
    });
  };
};
