import React from 'react';
import { View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpLogin: { screen: SignUpLoginScreen },
  Navigator: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);