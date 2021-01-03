import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {  AuthStateNavigator, LogoutStackNavigator, AppStackNavigator,ProfileStackNavigator } from './StackNavigation';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserScreen" component={ProfileStackNavigator} />
      <Tab.Screen name="Logout" component={LogoutStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator