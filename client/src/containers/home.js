import React, { useState } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { searchRestaurants } from "../actions/restaurants";
import { successToast, failureToast } from "../actions/toast";
import { setUserLocation, setSearchLocation } from "../actions/location";
import Header from "../components/header";
import Card from "../components/card";
import Spinner from "../components/spinner";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/modal";
import Map from '../components/googlemaps';

const Home = props => {
  const [searchData, updateSearchData] = useState({
    term: null,
  });
  const [loading, setLoading] = useState(false);
  const updateKeyword = e =>
    updateSearchData({ ...searchData, term: e.target.value });

  const search = async e => {
    if(e) {
      e.preventDefault()
    }

    setLoading(true);
    const res = await props.searchRestaurants({
      ...searchData,
      longitude: props.searchLocation.lng,
      latitude: props.searchLocation.lat
    });
    const { success, data } = res;
    if (success) {
      props.successToast(`${res.data.length} results found.`);
      if (data[0])
        props.setSearchLocation({
          lat: data[0].coordinates.latitude,
          lng: data[0].coordinates.longitude
        });
    } else {
      props.failureToast(res.message);
    }

    setLoading(false);
  };
  return (
    <div>
      <ToastContainer autoClose={10000} />
      <Header
        onChangeTerm={updateKeyword}
        onSearch={search}
      />
      <Modal />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="card-container">
          {
            props.restaurants &&
            props.restaurants.map((restaurant, index) => (
              <Card
                key={index}
                restaurant={restaurant}
                onPressName={props.setUserLocation}
              />
            ))}
        </div>
      )}
      <Map search={search} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsReducer.restaurants,
    position: state.locationReducer.mapCenter,
    searchLocation: state.locationReducer.searchLocation,
  };
};

export default connect(
  () => mapStateToProps,
  { searchRestaurants, failureToast, successToast, setUserLocation, setSearchLocation }
)(Home);
