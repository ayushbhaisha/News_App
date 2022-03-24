import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './src/Navigation';
import newsReducers from './src/store/reducers/newsReducers';

const rootReducer = combineReducers({
  news: newsReducers,
});

let composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;