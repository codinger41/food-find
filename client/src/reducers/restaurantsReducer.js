import { SEARCH } from '../actions/actionTypes';

const initialState = {
  restaurants: []
};

export default (state = initialState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case SEARCH:
      return { restaurants: action.data };
    default: return state;
  }
};
