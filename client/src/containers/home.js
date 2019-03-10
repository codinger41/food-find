import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { searchRestaurants } from '../actions/restaurants'
import { successToast, failureToast } from '../actions/toast';
import Header from '../components/header'
import Card from '../components/card'
import Spinner from '../components/spinner'
import 'react-toastify/dist/ReactToastify.css';

const Home = props => {
  const [searchData, updateSearchData] = useState({
    term: null,
    location: 'san francisco, ca',
  });
  const [loading, setLoading] = useState(false);
  const updateKeyword = e => updateSearchData({ ...searchData, term: e.target.value });
  const search = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await props.searchRestaurants(searchData);
    res.success ? 
        props.successToast('Found your results.') :
        props.failureToast(res.message)
    setLoading(false);
  }
  return (
    <div>
      <ToastContainer  autoClose={10000} />
      <Header
        onChangeTerm={updateKeyword}
        onSearch={search}
      />
      {
        loading ? <Spinner loading={loading} /> : 
        (
          <div class="card-container">
            {
              props.restaurants.map((restaurant, index) => 
                <Card 
                  key={index} 
                  restaurant={restaurant}
                />
              )
            }
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsReducer.restaurants
  };
};

export default connect(() => mapStateToProps, { searchRestaurants, failureToast, successToast })(Home);
