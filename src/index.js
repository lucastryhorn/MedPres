/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import initializedStore from './store';
import Routes from './routes';

initializedStore();

const App = () => {
  return <Routes />;
};

export default App;
