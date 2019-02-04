import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'config/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
export default ({ initialState = {
  auth: {
    isAuthenticated: localStorage.getItem('token')
  }
}, children }) => {

  const store = createStore(
    reducers, 
    initialState,
    composeWithDevTools(applyMiddleware(logger, reduxThunk))
  );

  return (
      <Provider store={store}>
        {children}
      </Provider>)
};
