import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal';
import { setSearchLocation } from '../actions/location';

const Header = props => {
  return (
    <nav>
      <div className="container navbar__container">
        <nav className="navbar__flex">
          <div className="navbar__left">
            <form className="navbar__search">
              <div className="navbar__inputwithicon">
                <input 
                  type="text"
                  name="term"
                  className="navbar__input" 
                  placeholder="Search for restaurants..."
                  onChange={e => props.onChangeTerm(e)}
                />
                <button
                  className="navbar__button"
                  onClick={(e) => props.onSearch(e)}
                />
              </div>
            </form>
            <button 
              className="btn orange"
              onClick={() => props.setSearchLocation()}
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

export default connect(() => {}, { openModal, setSearchLocation })(Header);
