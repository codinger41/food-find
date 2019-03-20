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
  return (
    <div>
      <ToastContainer autoClose={10000} />
      <Header/>
      <Modal />
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
      <Map />
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
