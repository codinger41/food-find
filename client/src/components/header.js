import React from 'react';

const Header = props => (
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
        </div>
        <div className="navbar__right">
          <div className="switch-wrap">
            <div className="switch-title">Toggle Map</div>
            <input className="switch" id="check1" type="checkbox"/>
            <label for="check1">&nbsp;</label>
          </div>
          <label className="navbar__toggler__label">
          <span className="navbar__hamberger"></span>
          <span>Menu</span></label>
          <input type="checkbox" name="" className="navbar__toggler__input" id="navbarToggler" />
        </div>
      </nav>
    </div>
  </nav>
);

export default Header;
