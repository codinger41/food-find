import React, { useState } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { openModal } from '../actions/modal';
import { searchRestaurants } from '../actions/restaurants';
import { setUserLocation } from '../actions/location';

const Header = props => {
  const [state, setState] = useState({
    address: null,
  });

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => reloadSearch(latLng))
      .catch(error => console.error('Error', error));
  };
  const handleChange = address => {
    setState({ address });
  };

  const reloadSearch = async (latlng) => {
    await props.setUserLocation(latlng);
    const restaurants = await props.searchRestaurants({
      latitude: props.position.lat,
      longitude: props.position.lng
    });
  };

  return (
    <nav>
      <div className="container navbar__container">
        <nav className="navbar__flex">
          <div className="navbar__left">
            <form className="navbar__search">
              <div className="navbar__inputwithicon">
              <PlacesAutocomplete
                value={state.address}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: 'Search Places ...',
                          className: 'location-search-input',
                        })}
                        className="navbar__input"
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </form>
            <button 
              className="btn orange"
              onClick={() => props.setUserLocation()}
            >
              Use my location
            </button>
            <div className="switch-container">
              <p className="showmap">show on map</p>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(e) =>  props.openModal()}
                />
                <div></div>
              </label>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );

}

const mapStateToProps = state => {
  return {
    position: state.locationReducer.mapCenter
  };
};

export default connect(() => mapStateToProps, { openModal, setUserLocation, searchRestaurants })(Header);
