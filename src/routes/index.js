import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AuthStack from './AuthStack';
import { MyTheme } from '../styles/themes';
import { store } from '../store';

export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
}
