import React, { useState } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer'
  }}>
    {text}
  </div>
);


const Map = (props) => {
  const userLocation = props.location;
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyC9b7EHAocHuWxDDba2rEVMKlnJl2W_DVE'}}
        center={userLocation}
        zoom={11}
        yesIWantToUseGoogleMapApiInternals
      >
        {
          props.restaurants.map(restaurant => (
            <Marker
              lat={restaurant.coordinates.latitude}
              lng={restaurant.coordinates.longitude}
              text={restaurant.name}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsReducer.restaurants
  };
};

export default connect(() => mapStateToProps, {})(Map);
