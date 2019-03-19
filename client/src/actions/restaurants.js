import axios from 'axios';
import { SEARCH } from './actionTypes';

export const searchRestaurants = ({ longitude, latitude }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search?longitude=${longitude}&latitude=${latitude}`);
      dispatch({
        type: SEARCH,
        data: response.data.data
      })
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
}
