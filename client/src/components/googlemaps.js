import React, { useState } from 'react';
import { connect } from 'react-redux'
import GoogleMapReact from 'google-map-react';
import { setUserLocation } from '../actions/location';

const Marker = ({ text, color, link }) => (
  <a
    href={link? link : '#'}
    rel="noopener noreferrer"
    target='_blank'
    style={{
      color: 'white', 
      background: color,
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer'
    }}
  >
    {text}
  </a>
);


const Map = (props) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyC9b7EHAocHuWxDDba2rEVMKlnJl2W_DVE' }}
        center={props.position}
        zoom={11}
        yesIWantToUseGoogleMapApiInternals
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

export default connect(() => mapStateToProps, {})(Map);
