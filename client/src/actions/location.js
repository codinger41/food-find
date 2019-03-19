
import { MAP_CENTER, SEARCH_LOCATION } from './actionTypes';

export const setUserLocation = (position) => {
  return (dispatch) => {
    if(!position) {
      navigator.geolocation.getCurrentPosition((pos) => {
        dispatch({
          type: MAP_CENTER,
          data: {
            lng: pos.coords.longitude,
            lat: pos.coords.latitude
          }
        })
      });
    } else {
      dispatch({
        type: MAP_CENTER,
        data: {
          ...position
        }
      })
    }
  };
};



export const setSearchLocation = (position) => {
  return (dispatch) => {
    if (position) {
      dispatch({
        type: SEARCH_LOCATION,
        data: { ...position }
      })
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch({
          type: SEARCH_LOCATION,
          data: {
            lng: position.coords.longitude,
            lat: position.coords.latitude
          }
        })
      });
    }
  }
};
