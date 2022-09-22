import React, { Component } from 'react';
import { Text } from 'react-native';
// import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { store,persistor } from './src/store';
// import Root from './src/RootNavigator';
import RootNavigator from './src/RootNavigator';
import { PersistGate } from 'redux-persist/es/integration/react'
// import { Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigator />
        </PersistGate>
      </Provider>
      // <Text>Hello</Text>
    );
  }
}