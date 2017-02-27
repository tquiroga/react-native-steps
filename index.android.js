import React from 'react'
import { AppRegistry } from 'react-native'
import NavRootContainer from './src/NavRootContainer'
import configureStore from './src/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('Jeevs', () => App);
