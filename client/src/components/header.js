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
                placeholder="Enter Location. eg 'san francisco'"
                onChange={e => props.onChangeLocation(e)}
              />
            </div>
            <br></br>
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
            onClick={() => props.onPressButton()}
          >
            Use my location
          </button>
        </div>
      </nav>
    </div>
  </nav>
);

export default Header;
