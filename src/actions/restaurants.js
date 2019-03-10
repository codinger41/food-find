import axios from 'axios';
import yelp from 'yelp-fusion';
import { SEARCH } from './actionTypes';

const client = yelp.client('UXuM4BFYIJI1_EaqmwICDlHVeBYEcuOHYwoRTzjlXXfBd9hAVxX05jd-qFegibFtBzl1Qr1Qyt02rtCSr-IvUTYFEoC-h9P_bsDPnLPeScozJ9u27KxKZUgIqgyFXHYx');

export const searchRestaurants = (term, location) => {
  return async (dispatch) => {
    try {
      const response = await client.search({ 
        term, location
      })
      console.log(response.jsonBody.businesses)
      dispatch({
        type: SEARCH,
        user: response.jsonBody.businesses
      })
      return response.jsonBody.businesses;
    } catch (error) {
      console.log(error)
    }
  }
}
