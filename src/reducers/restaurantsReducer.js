import { SEARCH } from '../actions/actionTypes';

const initialState = {
  restaurants: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return { restaurants: action.restaurants };
    default: return state;
  }
};
