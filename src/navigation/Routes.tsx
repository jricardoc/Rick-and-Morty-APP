import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Internal from '../screens/Internal';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home}/>
      <Screen name="Internal" component={Internal}/>
    </Navigator>
  );
}

export default Routes;