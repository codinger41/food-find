import { MAP_CENTER, SEARCH_LOCATION } from '../actions/actionTypes';

const initialState = {
  mapCenter: {
    lat: 41.5596681,
    lng: -81.3367854,
  },
  searchLocation: {
    lat: 41.5596681,
    lng: -81.3367854,
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAP_CENTER:
      return { ...state, mapCenter: action.data };
    case SEARCH_LOCATION:
      return { mapCenter: action.data, searchLocation: action.data }
    default: return state;
  }
};
