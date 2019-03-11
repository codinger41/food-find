import { MAP_CENTER } from '../actions/actionTypes';

const initialState = {
  mapCenter: {  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAP_CENTER:
      return { mapCenter: action.data };
    default: return state;
  }
};
