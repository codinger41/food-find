import axios from 'axios';
import { SEARCH } from './actionTypes';

export const searchRestaurants = ({ term, location }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search?term=${term}&location=${location}`)
      dispatch({
        type: SEARCH,
        user: response.data
      })
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
}
