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

navigator.geolocation.getCurrentPosition((position) => {
  store.dispatch({
    type: 'MAP_CENTER',
    data: {
      lng: position.coords.longitude,
      lat: position.coords.latitude
    }
  })
});

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Home />
        <Maps />
      </div>
    </Provider>
  );
}

export default App;
