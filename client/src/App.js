import React, { useState } from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Home from './containers/home';
import rootReducer from './reducers/rootReducer';
import Maps from './components/googlemaps';
import './App.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const App = () => {
  const [userLocation, setLocation] = useState({ lat: 59.95, lng: 30.33 });
  navigator.geolocation.getCurrentPosition((position) => {
    setLocation({
      lng: position.coords.longitude,
      lat: position.coords.latitude
    });
  });
  return (
    <Provider store={store}>
      <div>
        <Home location={userLocation} />
        <Maps location={userLocation}/>
      </div>
    </Provider>
  );
}

export default App;
