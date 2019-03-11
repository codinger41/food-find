
import {  OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export const openModal = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      openModal: true
    });
  };
};

export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
      openModal: false
    });
  };
}
