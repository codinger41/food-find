import React, { useState } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import { setUserLocation, setSearchLocation } from '../actions/location';
import { searchRestaurants } from '../actions/restaurants';

const Marker = ({ text, color, link }) => (
  <img 
    src={require('../images/marker.png')}
    className='markerImg'
  />
);


const Map = (props) => {
  const handleBoundsChange = async ({ center, zoom, bounds, marginBounds }) => {
    await props.setUserLocation(center);
    await props.searchRestaurants({
      latitude: props.position.lat,
      longitude: props.position.lng
    });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyDAQOhuvUriLPgDzVblnSSH7BUj-s2EMSw' }}
        center={props.position}
        zoom={11}
        yesIWantToUseGoogleMapApiInternals
        onChange={handleBoundsChange}
      >
        {
          Array.isArray(props.restaurants) && props.restaurants.map((restaurant, index) => (
            <Marker
              key={index}
              lat={restaurant.coordinates.latitude}
              lng={restaurant.coordinates.longitude}
              text={restaurant.name}
              color='red'
              link={restaurant.url}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsReducer.restaurants,
    position: state.locationReducer.mapCenter
  };
};

export default connect(() => mapStateToProps, { setUserLocation, searchRestaurants })(Map);
