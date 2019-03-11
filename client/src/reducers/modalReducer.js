import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes';

const initialState = {
  openModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.openModal;
    case CLOSE_MODAL:
      return action.openModal;
    default:
      return state;
  }
};
