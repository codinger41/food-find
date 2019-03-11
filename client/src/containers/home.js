import React, { useState } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { searchRestaurants } from "../actions/restaurants";
import { successToast, failureToast } from "../actions/toast";
import { setUserLocation } from "../actions/location";
import Header from "../components/header";
import Card from "../components/card";
import Spinner from "../components/spinner";
import "react-toastify/dist/ReactToastify.css";

const Home = props => {
  const [searchData, updateSearchData] = useState({
    term: null,
    location: null,
    longitude: null,
    latitude: null
  });
  const [loading, setLoading] = useState(false);
  const updateKeyword = e =>
    updateSearchData({ ...searchData, term: e.target.value });
  const updateLocation = e =>
    updateSearchData({ ...searchData, location: e.target.value });

  const updateCoordsForSearch = () => {
    updateSearchData({
      ...searchData,
      longitude: props.position.lng,
      latitude: props.position.lat
    });
  };

  const search = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await props.searchRestaurants(searchData);
    const { success, data } = res;
    if (success) {
      props.successToast(`${res.data.length} results found.`);
      props.setUserLocation({
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
        onChangeLocation={updateLocation}
        onSearch={search}
        onPressButton={updateCoordsForSearch}
      />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="card-container">
          {props.restaurants &&
            props.restaurants.map((restaurant, index) => (
              <Card
                key={index}
                restaurant={restaurant}
                onPressName={props.setUserLocation}
              />
            ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsReducer.restaurants,
    position: state.locationReducer.mapCenter
  };
};

export default connect(
  () => mapStateToProps,
  { searchRestaurants, failureToast, successToast, setUserLocation }
)(Home);
