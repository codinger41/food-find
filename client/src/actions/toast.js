
import { SUCCESS_TOAST, FAILURE_TOAST } from './actionTypes';
import { toast } from 'react-toastify';

export const successToast = (message) => {
  return (dispatch) => {
    dispatch({
      type: SUCCESS_TOAST
    });
    toast.success(message);
  };
};

export const failureToast = (message) => {
  return (dispatch) => {
    dispatch({
      type: FAILURE_TOAST
    });
    toast.error(message);
  };
};